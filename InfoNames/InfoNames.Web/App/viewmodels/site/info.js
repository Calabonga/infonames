define(['services/logger', 'knockout', 'services/dataServices',
    'durandal/app', 'services/busyIndicator', 'plugins/router'],
    function (logger, ko, dataService, app, indicator, router) {
        var
            currentName = ko.observable(),
            valueableLetters = ko.observableArray([]),
            gender = ko.observable(),
            selectedLetter,
            currentLetter = ko.observable(),
            item = ko.observable({}),
            success = function (data) {
                if (data && data.results) {
                    item(data.results[0]);
                    indicator.isbusy(false);
                }
            },
            loadData = function () {
                indicator.isbusy(true);
                var name = currentName();
                if (name) {
                    dataService.getName(name)
                        .then(success)
                        .fail(function () {
                            logger.logError('Не могу найти имя в списке', null, 'info', true);
                            router.navigate('#/notfoud');
                        }).fin(function () {
                            indicator.isbusy(false);
                        });
                }
            },
            activate = function (name) {
                splitName(name);
                currentLetter(name.substr(0, 1));
                currentName(name);
                loadData();
            },
            splitName = function (name) {
                var letters = [];
                for (var i = 0; i < name.length; i++) {
                    letters[i] = name.substr(i, 1).toUpperCase();
                }
                valueableLetters(letters);
            },
            showInfo = function (letter) {
                indicator.isbusy(true);
                selectedLetter = letter;
                dataService.getLettersInfo(letter, showMessageInfo);
            };

        item.subscribe(function (value) {
            if (value) {
                if (value.Gender() === 'М') gender('мужское имя');
                else gender('женское имя');
            }
        });

        function showMessageInfo(data) {
            indicator.isbusy(false);
            app.showMessage(data.results[0].Content(), 'Значение буквы \"' + selectedLetter + '\"');
        };

        return {
            showInfo: showInfo,
            letters: valueableLetters,
            activate: activate,
            currentName: currentName,
            currentLetter: currentLetter,
            item: item,
            gender: gender
        };
    });