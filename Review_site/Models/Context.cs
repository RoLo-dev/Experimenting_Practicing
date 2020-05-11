using Microsoft.EntityFrameworkCore;

namespace reviewPage.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get;set; }
        public DbSet<Review> Reviews { get; set; }
    }
}