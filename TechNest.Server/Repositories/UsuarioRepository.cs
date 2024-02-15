using Microsoft.EntityFrameworkCore;
using TechNest.Communication.DTOs.Request;
using TechNest.Communication.DTOs.Response;
using TechNest.Server.Infraestrutura;
using TechNest.Server.Models;
using TechNest.Server.Repositories.Interfaces;
using TechNest.Server.Utils.Enums;

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

        public async Task<long> CreateAsync(UsuarioReq request)
        {
            var usuario = Usuario.Criar(request.Nome, request.Email, request.Login, request.Senha, Roles.User);

            _context.Usuarios.Add(usuario);

            await _context.SaveChangesAsync();

            return usuario.Id;
        }
    }
}
