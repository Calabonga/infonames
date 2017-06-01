using System.Data.Entity;
using InfoNames.Models;

namespace InfoNames.Data {

public class ApplicationDbContext : DbContext {

	public ApplicationDbContext()
		: base("DefaultConnection") {

	}

	public IDbSet<LetterInfo> Letters { get; set; }
	public IDbSet<NameInfo> Names { get; set; }

}
}