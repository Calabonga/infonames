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

        // инициализация bindingHandlers
        ko.bindingHandlers.blockUI = {
            init: function (element, valueAccessor) {
                var value = valueAccessor(),
                    ctrl = ko.utils.unwrapObservable(value);
                $(element).css('position', 'relative');
                $(element).css('min-height', '70px');
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    var el = $("#block" + ctrl.uniqueId)[0];
                    if (el)
                        ko.removeNode(el);
                });
            },
            update: function (element, valueAccessor, allBindingAccessor) {
                var value = valueAccessor(),
                    ctrl = ko.utils.unwrapObservable(value);
                var el;
                if (ctrl.isbusy()) {
                    if (ctrl && ctrl.template) {
                        var block = ctrl.template(element);
                        $(element).append(block);
                    }
                } else {
                    el = $("#block" + ctrl.uniqueId)[0];
                    if (el)
                        ko.removeNode(el);
                }
            }
        };

        app.configurePlugins({
            router: true,
            dialog: true
        });

        window.toastr.options.positionClass = 'toast-bottom-right';
        window.toastr.options.backgroundpositionClass = 'toast-bottom-right';
        viewLocator.useConvention();

        app.start().then(function () {
            app.setRoot('viewmodels/shell', 'entrance');
        });
    });