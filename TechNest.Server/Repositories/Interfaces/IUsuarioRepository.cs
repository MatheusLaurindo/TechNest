using TechNest.Communication.DTOs.Request;
using TechNest.Communication.DTOs.Response;
using TechNest.Server.Models;

namespace TechNest.Server.Repositories.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<GetUsuarioResp> GetByIdAsync(long id);
        Task<Usuario> GetByLoginAsync(string login, string senha);
        Task<long> CreateAsync(UsuarioReq usuario);
        Task<long> UpdateAsync(UsuarioReq usuario);
    }
}
