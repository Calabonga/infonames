define(['services/logger'], function (logger) {

    var manager = new breeze.EntityManager('breeze/data'),
        filterOperator = breeze.FilterQueryOp,
        Predicate = breeze.Predicate,
            getLetters = function () {
                return breeze.EntityQuery
                    .from('Lookups')
                    .noTracking()
                    .using(manager)
                    .execute();
            },
    getNamesByFirstLetter = function (options, success) {
        if (!options) {
            throw new Error('No parameters found for request by Letter name');
        }
        var byLetter = new Predicate('Name', filterOperator.StartsWith, options.letter);
        if (options.type) {
            byLetter = byLetter.and(new Predicate('Gender', filterOperator.Equals, options.type));
        }
        var query = breeze.EntityQuery.from('Names').where(byLetter);
        manager.executeQuery(query)
            .then(success).fail(queryFailed);
    },
    getName = function (name) {
        var byName = new Predicate('Name', filterOperator.Equals, name);
        var query = breeze.EntityQuery.from('Names').where(byName);
        return manager.executeQuery(query);
    },
    getLettersInfo = function (letter, successInfo) {
        var query = breeze.EntityQuery.from('LettersInfo').where('Name', filterOperator.Equals, letter);
        return manager.executeQuery(query, successInfo);    //});
    },
    queryFailed = function (e) {
        logger.log(e.message, null, 'dataService', true);
    };

    return {
        getName: getName,
        getLettersInfo: getLettersInfo,
        getLetters: getLetters,
        getNamesByFirstLetter: getNamesByFirstLetter
    };
})