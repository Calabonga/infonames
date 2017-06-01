using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InfoNames.Models
{
	[Table("Names")]
	[MetadataType(typeof(NameInfoMetadata))]
	public class NameInfo : ModelBase {

		internal sealed class NameInfoMetadata {

			/// <summary>
			/// Имя
			/// </summary>
			[Display(Name = "Имя")]
			[Required(ErrorMessage = "Имя - обязательное поле")]
			[StringLength(50, ErrorMessage = "Имя не может быть длиннее 50 символов")]
			public string Name { get; set; }

			/// <summary>
			/// Описание
			/// </summary>
			[Display(Name = "Описание")]
			[Required(ErrorMessage = "Описание - обязательное поле")]
			public string Content { get; set; }
		}

		/// <summary>
		/// Пол (М/Ж)
		/// </summary>
		[Display(Name = "Пол (М/Ж)")]
		[Required(ErrorMessage = "Пол (М/Ж) - обязательное поле")]
		[StringLength(1, ErrorMessage = "Пол (М/Ж) не может быть длиннее 1 символов")]
		public string Gender { get; set; }
	}
}