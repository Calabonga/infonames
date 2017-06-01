define(['services/logger'],function (logger) {
    var
        title = 'О проекте',
        activate = function() {
            logger.logSuccess('Загружена страница "О проекте"', 'about');
        };

    return {
        title: title,
        activate: activate
    };
});