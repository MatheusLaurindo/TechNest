using System.ComponentModel.DataAnnotations;

namespace TechNest.Communication.DTOs.Request
{
    public sealed class LoginReq
    {
        public string Login { get; set; }
        public string Senha { get; set; }
    }

    public sealed class UsuarioReq
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Login { get; set; }
        [Required]
        public string Senha { get; set; }
    }
}
