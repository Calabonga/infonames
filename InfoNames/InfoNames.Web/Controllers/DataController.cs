using System.Linq;
using System.Web.Http;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using InfoNames.Data;
using InfoNames.Models;
using Newtonsoft.Json.Linq;

namespace InfoNames.Web.Controllers {

	[BreezeController]
	public class DataController : ApiController {
		private readonly EFContextProvider<ApplicationDbContext> _contextProvider
			= new EFContextProvider<ApplicationDbContext>();

		[HttpGet]
		public string Metadata() {
			return _contextProvider.Metadata();
		}

		[HttpGet]
		public IQueryable<NameInfo> Names() {
			return _contextProvider.Context.Names;
		}

		[HttpGet]
		public IQueryable<LetterInfo> LettersInfo() {
			return _contextProvider.Context.Letters;
		}

		[HttpGet]
		public object Lookups() {
			var items = _contextProvider.Context.Names
					.Select(x => x.Name.Substring(0, 1))
					.Distinct();
			var lookup = new { items };
			return lookup;
		}

		[HttpPost]
		public SaveResult SaveChanges(JObject saveBundle) {
			return _contextProvider.SaveChanges(saveBundle);
		}
	}
}
