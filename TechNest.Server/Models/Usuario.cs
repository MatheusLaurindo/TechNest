using TechNest.Server.Models.Base;
using TechNest.Server.Utils.Enums;

namespace TechNest.Server.Models
{
    public class Usuario : EntidadeBase
    {
        public string Nome { get; protected set; }
        public string Email { get; protected set; }
        public string Login { get; protected set; }
        public string Senha { get; protected set; }
        public string Role { get; set; }

        protected Usuario() : base()
        {
        }

        protected Usuario(string nome, string email, string login, string senha, Roles role) : this()
        {
            SetNome(nome);
            SetEmail(email);
            SetLogin(login);
            SetSenha(senha);
            SetRole(role);
        }

        private void SetRole(Roles role)
        {
            Role = role.ToString();
        }

        public void SetNome(string nome)
        {
            Nome = nome ?? throw new InvalidOperationException(nameof(nome));
        }

        public void SetEmail(string email)
        {
            Email = email ?? throw new InvalidOperationException(nameof(email));
        }

        public void SetLogin(string login)
        {
            Login = login ?? throw new InvalidOperationException(nameof(login));
        }

        public void SetSenha(string senha)
        {
            Senha = senha ?? throw new InvalidOperationException(nameof(senha));
        }

        public static Usuario Criar(string nome, string email, string login, string senha, Roles role)
        {
            return new Usuario(nome, email, login, senha, role);
        }
    }
}
