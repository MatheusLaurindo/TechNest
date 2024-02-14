namespace TechNest.Communication.DTOs.Response
{
    public sealed class GetUsuarioResp
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public string Role { get; set; }
    }
}
