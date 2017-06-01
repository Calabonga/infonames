using System.ComponentModel.DataAnnotations;

namespace InfoNames.Models
{
	public class ModelBase {
		/// <summary>
		/// Идентификтор
		/// </summary>
		[Key]
		[Display(Name = "Идентификтор")]
		public int Id { get; set; }

		public string Name { get; set; }

		public string Content { get; set; }
	}
}