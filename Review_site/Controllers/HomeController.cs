using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reviewPage.Models;

namespace reviewPage.Controllers
{
    public class HomeController : Controller
    {
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
                DbContext.User.add(newUser);
                DbContext.SaveChanges();
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
