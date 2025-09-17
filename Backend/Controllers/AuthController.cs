using Backend.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var user = _context.Users.FirstOrDefault(u =>
                (u.Username == request.UsernameOrEmail || u.Email == request.UsernameOrEmail) &&
                u.Password == request.Password);

            if (user == null)
                return Unauthorized(new { message = "Invalid username or password" });

            // return role + id (you can later issue JWT tokens here)
            return Ok(new
            {
                user.Id,
                user.Username,
                user.Email,
                user.Role,
                user.Status
            });
        }
    }

    public class LoginRequest
    {
        public string UsernameOrEmail { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
