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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed an admin user
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Username = "admin",
                    Email = "ssas.gulane@gmail.com",
                    Password = "Ramel1234", // ⚠️ plain text for now, better to hash later
                    Role = "Chairman",
                    Status = true
                }
            );
        }

    }
}
