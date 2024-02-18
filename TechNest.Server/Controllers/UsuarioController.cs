using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TechNest.Communication.DTOs.Request;
using TechNest.Server.Repositories.Interfaces;

namespace TechNest.Server.Controllers
{
    [ApiController]
    [Route("api/v1/usuarios")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;

        public UsuarioController(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin, User")]
        public async Task<IActionResult> Get(long id)
        {
            var usuario = await _repository.GetByIdAsync(id);

            if (usuario == null)
                return NotFound(new { message = "Usuário não encontrado" });

            return Ok(usuario);
        }

        [HttpPut("editar/{id}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> Update([FromBody] UsuarioReq usuarioReq)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _repository.UpdateAsync(usuarioReq);

            return Ok(result);
        }
    }
}
