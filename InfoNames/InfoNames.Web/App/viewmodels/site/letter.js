define(['services/logger', 'knockout', 'services/dataServices', 'services/busyIndicator'],
    function (logger, ko, dataService, indicator) {
        var
            currentLetter = ko.observable(),
            type = ko.observable(''),
            namesByLetter = ko.observableArray(),
            selectType = function () {
                var current = type(), newType = this[0];
                if (current !== newType) {
                    type(this[0]);
                    loadData();
                }
            },
            success = function (data) {
                if (data && data.results) {
                    namesByLetter(data.results);
                    indicator.isbusy(false);
                }
            },
            loadData = function () {
                indicator.isbusy(true);
                dataService.getNamesByFirstLetter({ letter: currentLetter(), type: type() }, success);
            },
            activate = function (letter) {
                currentLetter(letter);
                loadData();
            };

        return {
            type: type,
            activate: activate,
            selectType: selectType,
            currentLetter: currentLetter,
            namesByLetter: namesByLetter
        };
    });