using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InfoNames.Models {

	[Table("Letters")]
	[MetadataType(typeof(LetterInfoMetadata))]
	public class LetterInfo : ModelBase {

		internal sealed class LetterInfoMetadata {
			/// <summary>
			/// Буква
			/// </summary>
			[Display(Name = "Буква")]
			[Required(ErrorMessage = "Буква - обязательное поле")]
			[StringLength(50, ErrorMessage = "Буква не может быть длиннее 50 символов")]
			public string Name { get; set; }

			/// <summary>
			/// Описание
			/// </summary>
			[Display(Name = "Описание")]
			[Required(ErrorMessage = "Описание - обязательное поле")]
			[StringLength(1000)]
			public string Content { get; set; }
		}
	}
}
