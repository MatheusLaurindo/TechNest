namespace TechNest.Server.Utils
{
    public static class EnumUtils
    {
        public static string GetDisplayName(this Enum enumValue)
        {
            var fieldInfo = enumValue.GetType().GetField(enumValue.ToString());
            var descriptionAttributes = fieldInfo.GetCustomAttributes(
                               typeof(System.ComponentModel.DataAnnotations.DisplayAttribute), false) as System.ComponentModel.DataAnnotations.DisplayAttribute[];

            if (descriptionAttributes == null || descriptionAttributes.Length == 0)
            {
                return enumValue.ToString();
            }
            else
            {
                return descriptionAttributes[0].Name;
            }
        }

        public static List<KeyValuePair<int, string>>
            GetEnumListChaveValor<TEnum>() where TEnum : Enum
        {
            var enumList = new List<KeyValuePair<int, string>>();

            foreach (var value in Enum.GetValues(typeof(TEnum)))
            {
                enumList.Add(new KeyValuePair<int, string>((int)value, GetDisplayName((Enum)value)));
            }

            return enumList;
        }
    }
}
