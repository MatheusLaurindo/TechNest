using System.ComponentModel.DataAnnotations;

namespace TechNest.Server.Utils.Enums
{
    public enum Categoria
    {
        [Display(Name = "Programação")]
        Programacao = 1,
        [Display(Name = "Redes")]
        Redes = 2,
        [Display(Name = "Segurança")]
        Seguranca = 3,
        [Display(Name = "Banco de Dados")]
        BancoDeDados = 4,
        [Display(Name = "Cloud (Computação em nuvem)")]
        Cloud = 5,
        [Display(Name = "Mobile")]
        Mobile = 6,
        [Display(Name = "Web")]
        Web = 7,
    }
}
