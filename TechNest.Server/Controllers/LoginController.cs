using Microsoft.AspNetCore.Mvc;
using TechNest.Communication.DTOs.Request;
using TechNest.Server.Repositories.Interfaces;
using TechNest.Server.Service;

namespace TechNest.Server.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;
        private readonly IJwtTokenService _jwtTokenService;

        public LoginController(IUsuarioRepository repository, IJwtTokenService jwtTokenService)
        {
            _repository = repository;
            _jwtTokenService = jwtTokenService;

        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<dynamic>> AutenticarAsync([FromBody] LoginReq login)
        {
            var usuario = await _repository.GetByLoginAsync(login.Login, login.Senha);

            if (usuario == null)
                return NotFound(new { message = "Usuário ou senha inválido(s)" });

            var token = _jwtTokenService.GenerateToken(usuario);

            return new
            {
                idUsuario = usuario.Id,
                token = token
            };
        }
    }
}
