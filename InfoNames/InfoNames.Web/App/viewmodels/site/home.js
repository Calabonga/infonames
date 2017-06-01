define(
    ['knockout', 'services/logger', 'services/dataservices', 'services/busyIndicator'],
    function(ko, logger, dataService, indicator) {
        var
            title ='Что значит имя',
            letters = ko.observableArray(),
            activate = function() {
                indicator.isbusy(true);
                dataService.getLetters().then(function(data) {
                    letters(data.results[0].items);
                    indicator.isbusy(false);
                }).fail(function(data) {
                    logger.logError(data.message);
                });
            };

        return {
            activate: activate,
            title: title,
            letters: letters
        }
    });