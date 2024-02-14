using TechNest.Server.Models.Base;
using TechNest.Server.Utils.Enums;

namespace TechNest.Server.Models
{
    public class Artigo : EntidadeBase
    {
        public string Titulo { get; protected set; }
        public Categoria Categoria { get; protected set; }
        public DateTime DataPublicacao { get; protected set; }
        public bool Autorizado { get; protected set; }

        public long UsuarioId { get; protected set; }
        public Usuario Usuario { get; protected set; }

        protected Artigo() : base()
        {
        }

        protected Artigo(string titulo, Categoria categoria, DateTime dataPublicacao, 
            bool autorizado, Usuario usuario): this()
        {
            SetTitulo(titulo);
            SetCategoria(categoria);
            SetDataPublicacao(dataPublicacao);
            SetAutorizado(autorizado);
            SetUsuario(usuario);
        }

        public void SetTitulo(string titulo)
        {
            Titulo = titulo ?? throw new InvalidOperationException(nameof(titulo));
        }

        public void SetCategoria(Categoria categoria)
        {
            Categoria = categoria;
        }

        public void SetDataPublicacao(DateTime dataPublicacao)
        {
            DataPublicacao = dataPublicacao;
        }

        public void SetAutorizado(bool autorizado)
        {
            Autorizado = autorizado;
        }

        public void SetUsuario(Usuario usuario)
        {
            Usuario = usuario ?? throw new InvalidOperationException(nameof(usuario));
        }

        public static Artigo Criar(string titulo, Categoria categoria, DateTime dataPublicacao, 
                       bool autorizado, Usuario usuario)
        {
            return new Artigo(titulo, categoria, dataPublicacao, autorizado, usuario);
        }
    }
}
