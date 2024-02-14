using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TechNest.Server.Utils;
using TechNest.Server.Utils.Enums;

namespace TechNest.Server.Controllers
{
    [ApiController]
    [Route("api/v1/categorias")]
    public class CategoriaController : ControllerBase
    {
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetAll()
        {
            var categorias = EnumUtils.GetEnumListChaveValor<Categoria>();

            return Ok(categorias);
        }
    }
}
