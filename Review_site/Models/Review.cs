using System;
using System.ComponentModel.DataAnnotations;

namespace reviewPage.Models
{
    public class Review
    {
        [Key]
        public int ReviewID { get;set; }
        public int CreatorID { get;set; }
        public User Creator { get;set; }

        [Required(ErrorMessage = "Please add a title")]
        [MinLength(2, ErrorMessage = "Title should be more than 2 characters long")]
        public string ReviewTitle {get;set; }

        [Required(ErrorMessage = "Please leave your review")]
        [MinLength(2, ErrorMessage = "Review should be more than 2 characters long")]
        public string Description { get;set; }
        public DateTime CreatedAt { get;set; } = DateTime.Now;
        public DateTime UpdatedAt { get;set; } = DateTime.Now;
    }
}