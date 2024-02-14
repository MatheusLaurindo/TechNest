namespace TechNest.Server.Utils
{
    public static class IOUtils
    {
        public static async Task<string> BuscaFotoPerfilAsync(long? id)
        {
            try
            {
                var path = Path.Combine(
                Environment.CurrentDirectory,
                "Content",
                "Fotos",
                "Usuarios",
                $"{id}.jpg");

                if (!File.Exists(path))
                    throw new FileNotFoundException("Foto não encontrada.", path);

                var arquivo = await ReadAllBytesAsync(path);
                string base64 = Convert.ToBase64String(arquivo);

                return "data:image/jpeg;base64," + base64;
            }
            catch (Exception)
            {
                return "";
            }
        }

        public static async Task SalvarFotoPerfilAsync(long id, string base64)
        {
            if (string.IsNullOrWhiteSpace(base64))
                throw new ArgumentNullException(nameof(base64));

            // split base64 remover data:image/jpeg;base64,
            base64 = base64.Split(',')[1];

            var path = Path.Combine(
                Environment.CurrentDirectory,
                "Content",
                "Fotos",
                "Usuarios",
                $"{id}.jpg");

            if (!Directory.Exists(Path.GetDirectoryName(path)))
                Directory.CreateDirectory(Path.GetDirectoryName(path));

            await WriteAllBytesAsync(path, Convert.FromBase64String(base64));
        }

        private static async Task WriteAllBytesAsync(string path, byte[] bytes)
        {
            if (string.IsNullOrWhiteSpace(path))
                throw new ArgumentNullException(nameof(path));

            if (bytes is null)
                throw new ArgumentNullException(nameof(bytes));

            await File.WriteAllBytesAsync(path, bytes);
        }

        public static async Task<byte[]> ReadAllBytesAsync(string path)
        {
            if (string.IsNullOrWhiteSpace(path))
                throw new ArgumentNullException(nameof(path));

            return await File.ReadAllBytesAsync(path);
        }
    }
}
