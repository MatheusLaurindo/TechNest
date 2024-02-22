using Microsoft.EntityFrameworkCore;
using TechNest.Server.Infraestrutura.Mapping;
using TechNest.Server.Models;

namespace TechNest.Server.Infraestrutura
{
    public class TechNestDbContext : DbContext
    {
        public TechNestDbContext(DbContextOptions<TechNestDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioMapping());

            base.OnModelCreating(modelBuilder);
        }
    }
}
