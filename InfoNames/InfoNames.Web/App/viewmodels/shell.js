define(['plugins/router', 'services/busyIndicator'],
    function (router, indicator) {
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
            indicator: indicator,
            activate: activate,
            router: router
        };
    })