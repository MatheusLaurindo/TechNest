using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechNest.Server.Models;

namespace TechNest.Server.Infraestrutura.Mapping
{
    public class ArtigoMapping : IEntityTypeConfiguration<Artigo>
    {
        public void Configure(EntityTypeBuilder<Artigo> builder)
        {
            builder.HasKey(a => a.Id);

            builder.HasIndex(a => a.Titulo)
                .IsUnique();
            builder.Property(a => a.Titulo)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(a => a.DataPublicacao)
                .IsRequired();

            builder.Property(a => a.Autorizado)
                .IsRequired();

            builder.Property(a => a.Categoria)
                .IsRequired();

            builder.HasOne(a => a.Usuario)
                .WithMany(u => u.Artigos)
                .HasForeignKey(a => a.UsuarioId)
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired(false);
        }
    }
}
