define(['plugins/router'],
    function (router) {
        var
            activate = function () {

                var routes = [
                    { route: ['', 'home/index'], moduleId: 'site/home', title: 'Выбор буквы', nav: true },
                    { route: 'about', moduleId: 'site/about', title: 'О проекте', nav: true }
                ];

                return router.makeRelative({ moduleId: 'viewmodels' })
                    .map(routes) 
                    .buildNavigationModel()
                    .activate();
            };

        return {
            activate: activate,
            router: router
        };
    })