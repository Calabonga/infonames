define(['plugins/router', 'services/busyIndicator'],
    function (router, indicator) {
        var
            activate = function () {

                var routes = [
                    { route: ['', 'home/index'], moduleId: 'site/home', title: 'Выбор буквы', nav: true },
                    { route: 'about', moduleId: 'site/about', title: 'О проекте', nav: true },
                    { route: 'letter/:letter', moduleId: 'site/letter', title: 'Имена по букве', nav: false },
                    { route: 'info/:name', moduleId: 'site/info', title: 'Значение имени', nav: false }
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