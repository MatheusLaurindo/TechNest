using Microsoft.EntityFrameworkCore;
using TechNest.Communication.DTOs.Response;
using TechNest.Server.Infraestrutura;
using TechNest.Server.Models;
using TechNest.Server.Repositories.Interfaces;

namespace TechNest.Server.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly TechNestDbContext _context;

        public UsuarioRepository(TechNestDbContext context)
        {
            _context = context;
        }

        public async Task<GetUsuarioResp> GetByIdAsync(long id)
        {
            var usuario = _context.Usuarios
            .Where(u => u.Id == id);

            return await usuario.Select(x => new GetUsuarioResp
            {
                Id = x.Id,
                Nome = x.Nome,
                Email = x.Email,
                Login = x.Login,
                Senha = "********",
            }).FirstOrDefaultAsync();
        }

        public async Task<Usuario> GetByLoginAsync(string login, string senha)
        {
            var usuario = await _context.Usuarios
            .Where(u => u.Login == login && u.Senha == senha)
            .FirstOrDefaultAsync();

            return usuario;
        }
    }
}
