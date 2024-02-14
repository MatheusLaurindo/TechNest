namespace TechNest.Server.Models.Base
{
    public class EntidadeBase
    {
        public long Id { get; set; }

        public void SetId(long id)
        {
            if (id < 1)
                throw new InvalidOperationException(nameof(id));

            Id = id;
        }
    }
}
