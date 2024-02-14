using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechNest.Server.Models;
namespace TechNest.Server.Infraestrutura.Mapping
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.Nome)
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(u => u.Email)
                .IsUnique();
            builder.Property(u => u.Email)
                .HasMaxLength(254)
                .IsRequired();

            builder.HasIndex(u => u.Login)
                .IsUnique();

            builder.Property(u => u.Login)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(u => u.Senha)
                .HasMaxLength(16)
                .IsRequired();

            builder.Property(u => u.Role)
                .IsRequired();
        }
    }
}
