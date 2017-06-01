using System.Web.Http;
using InfoNames.Web;

[assembly: WebActivator.PreApplicationStartMethod(typeof(BreezeWebApiConfig), "RegisterBreezePreStart")]
namespace InfoNames.Web {

	public static class BreezeWebApiConfig {

		public static void RegisterBreezePreStart() {
			GlobalConfiguration.Configuration.Routes.MapHttpRoute(
				name: "BreezeApi",
				routeTemplate: "breeze/{controller}/{action}"
			);
		}
	}
}