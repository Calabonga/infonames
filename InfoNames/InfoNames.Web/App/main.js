require.config({
    paths: {
        'text': '../scripts/text',
        'durandal': '../scripts/durandal',
        'plugins': '../scripts/durandal/plugins',
        'transitions': '../scripts/durandal/transitions',
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],
    function (system, app, viewLocator) {

        system.debug(true);

        app.title = 'Что значит имя';

        app.configurePlugins({
            router: true,
            dialog: true
        });

        window.toastr.options.positionClass = 'toast-bottom-right';
        window.toastr.options.backgroundpositionClass = 'toast-bottom-right';
        viewLocator.useConvention();

        app.start().then(function () {
            app.setRoot('viewmodels/shell');
        });
    });