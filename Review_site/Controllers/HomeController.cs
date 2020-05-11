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
            get { return HttpContext.Session.GetInt32("UserId"); }
            set{ HttpContext.Session.SetInt32("UserId", (int)value); }
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

        [HttpGet("/review/new-review")]
        public IActionResult PostReview()
        {
            return View();
        }

        [HttpGet("review/logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("Index");
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
                return RedirectToAction("Index");
            } else{
                return View("Register");
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
