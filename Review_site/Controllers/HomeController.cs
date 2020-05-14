using System;
using System.IO;
using System.Linq;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reviewPage.Models;

namespace reviewPage.Controllers
{
    public class HomeController : Controller
    {
        private Context dbContext;
        public HomeController(Context context)
        {
            dbContext = context;
        }
        private int? UserSession
        {
            get { return HttpContext.Session.GetInt32("UserID"); }
            set{ HttpContext.Session.SetInt32("UserID", (int)value); }
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("/review/register")]
        public IActionResult Register()
        {
            return View();
        }

        [HttpGet("/review/login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpGet("review/logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("Index");
        }

        [HttpGet("/review/new-review")]
        public IActionResult PostReview()
        {
            return View();
        }

        [HttpGet("/review/view-review/{reviewId}")]
        public IActionResult ViewReview(int reviewId)
        {
            if(UserSession == null)
            {
                return View("Login");
            }
            List<Review> selectedReview = dbContext.Reviews
            .Where(i => i.ReviewID == reviewId)
            .Include(i => i.Creator)
            .ToList();
            User CurrentUser = dbContext.Users.FirstOrDefault(i => i.UserID == UserSession);
            return View(selectedReview);
        }

        [HttpGet("/review/dashboard")]
        public IActionResult Dashboard(int UserId)
        {
            if(UserSession == null)
            {
                return View("Login");
            }
            else
            {
                User CurrentUser = dbContext.Users.FirstOrDefault(i => i.UserID == UserId);
                ViewBag.CurrentUser = dbContext.Users.FirstOrDefault(i => i.UserID == UserSession);
                List<Review> AllReviews = dbContext.Reviews
                .OrderByDescending(i => i.CreatedAt)
                .Include(i => i.Creator)
                .ToList();
                return View(AllReviews);
            }
        }

        [HttpGet("/review/edit-review/{reviewId}")]
        public IActionResult ReviewToEdit(int reviewId)
        {
            if(UserSession == null)
            {
                return View("Login");
            }
            Review reviewToEdit = dbContext.Reviews.Single(i => i.ReviewID == reviewId);
            return View("EditReview", reviewToEdit);
        }

        [HttpPost("/review/edit-review/{reviewId}")]
        public IActionResult EditReview(Review selectedReview, int reviewId)
        {
            if(UserSession == null)
            {
                return View("Login");
            }
            if(ModelState.IsValid)
            {
                Review reviewToEdit = dbContext.Reviews.FirstOrDefault(i => i.ReviewID == reviewId);
                reviewToEdit.ReviewTitle = selectedReview.ReviewTitle;
                reviewToEdit.Description = selectedReview.Description;
                dbContext.SaveChanges();
                return RedirectToAction("ViewReview", "Review", new{reviewId});
            }
            else
            {
                return View("EditReview", selectedReview);
            }
        }

        [HttpPost("/review/register")]
        public IActionResult NewUser(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(dbContext.Users.Any(i => i.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already exists");
                    return View("Register");
                }
                PasswordHasher<User> hasher = new PasswordHasher<User>();
                string hashedPW = hasher.HashPassword(newUser, newUser.Password);
                newUser.Password = hashedPW;
                dbContext.Add(newUser);
                dbContext.SaveChanges();
                UserSession = newUser.UserID;
                return RedirectToAction("Dashboard");
            } 
            else
            {
                return View("Register");
            }
        }

        [HttpPost("/review/login")]
        public IActionResult UserReturns(Login currentUser)
        {
            if(ModelState.IsValid)
            {
                var uid = dbContext.Users.FirstOrDefault(i => i.Email == currentUser.LoginEmail);
                if(uid == null)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid Credentials");
                    return View("Login");
                }
                var hasher = new PasswordHasher<Login>();
                var result = hasher.VerifyHashedPassword(currentUser, uid.Password, currentUser.LoginPassword);
                if(result == 0)
                {
                    ModelState.AddModelError("LoginPassword", "Invalid Credentials");
                    return View("Login");
                }
                UserSession = uid.UserID;
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("Login");
            }
        }

        [HttpPost("/review/new-review")]
        public IActionResult NewReview(Review NewReview)
        {
            if(UserSession == null)
            {
                return View("Login");
            }
            else
            {
                if(ModelState.IsValid)
                {
                    User uid = dbContext.Users.FirstOrDefault(i => i.UserID == UserSession);
                    NewReview.CreatorID = uid.UserID;
                    dbContext.Reviews.Add(NewReview);
                    dbContext.SaveChanges();
                    return RedirectToAction("Dashboard", new { userFromDb = uid.UserID });
                }
                else
                {
                    return View("PostReview");
                }
            }
        }









        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
