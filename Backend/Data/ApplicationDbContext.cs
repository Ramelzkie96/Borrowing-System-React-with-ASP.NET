using Backend.Models;
using Microsoft.EntityFrameworkCore;
//using Backend.Models; // adjust namespace if needed

namespace Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Add DbSets for your entities
        //public DbSet<Item> Items { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
