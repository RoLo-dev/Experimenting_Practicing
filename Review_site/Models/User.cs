using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace reviewPage.Models
{
    public class User
    {
        [Key]
        public int UserID { get;set; }
        public List<Review> ReviewsCreated { get;set; }

        [Required(ErrorMessage = "Please enter your name")]
        [MinLength(2, ErrorMessage = "Name should be more than 2 characters")]
        public string FirstName { get;set; }

        [Required(ErrorMessage = "Please enter your last name")]
        [MinLength(2, ErrorMessage = "Last name should be more than 2 characters")]
        public string LastName { get;set; }

        [Required(ErrorMessage = "Please enter your email")]
        [MinLength(5, ErrorMessage = "Email should be more than 5 characters")]
        [DataType(DataType.EmailAddress)]
        public string Email { get;set; }

        [Required(ErrorMessage = "Password required")]
        [MinLength(5, ErrorMessage = "Password should be more than 5 characters long")]
        [DataType(DataType.Password)]
        public string Password { get;set; }

        [NotMapped]
        [Required(ErrorMessage = "Please confirm your password")]
        [Compare("Password", ErrorMessage = "Passwords don't match")]
        [DataType(DataType.Password)]
        public string ConfirmPW { get;set; }

        [Required]
        public DateTime CreatedAt { get;set; } = DateTime.Now;
        [Required]
        public DateTime UpdatedAt { get;set; } = DateTime.Now;
    }
}
[NotMapped]
public class Login
{
    [Required(ErrorMessage = "Please enter your email")]
    [DataType(DataType.EmailAddress)]
    public string LoginEmail { get;set; }

    [Required(ErrorMessage = "Please enter your password")]
    [DataType(DataType.Password)]
    public string LoginPassword { get;set; }
}