namespace Backend.Models
{
    public class User
    {
        public int Id { get; set; }  // Primary key

        public string Username { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;  // Will store a hashed password later

        public string Role { get; set; } = "Chairman";  // Default to Faculty (or Chairman)

        public bool Status { get; set; } = true;  // true = active, false = inactive
    }
}
