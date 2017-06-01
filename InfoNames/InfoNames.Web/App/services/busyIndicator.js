define(['knockout', 'services/utils', 'config'], function (ko, utils, config) {
    var ctrl = this;
    ctrl.uniqueId = utils.guid();
    ctrl.isbusy = ko.observable(false);
    ctrl.imageName = config.site.cfg.busyIndicatorImageName;
    ctrl.modalCss = '<style type="text/css">' +
       '.modalBusy {' +
       'position:fixed;' +
       'z-index:8888;' +
       'margin-left:0;' +
       'top:0;' +
       'left:0;' +
       'height:100%;' +
       'width:100%;' +
       'background:rgba(200,200,200,.5)url("' + ctrl.imageName + '") 50% 50% no-repeat;}' +
       '</style>';
    ctrl.ctrlTemplate = function () {
        return '<div id="block' + ctrl.uniqueId + '" ' + 'class="modalBusy">&nbsp;</div>\
            </div></div>';
    };
    ctrl.show = function () {
        ctrl.isbusy(true);
    };
    ctrl.hide = function () {
        ctrl.isbusy(false);
    };
    ctrl.init = function () {
        if (!window.hasModelBlocker) {
            $("head").append(ctrl.modalCss);
            window.hasModelBlocker = true;
        }
        return;
    }();

    return {
        isbusy: isbusy,
        on: ctrl.show,
        off: ctrl.hide,
        template: ctrl.ctrlTemplate,
        uniqueId: ctrl.uniqueId
    };
});