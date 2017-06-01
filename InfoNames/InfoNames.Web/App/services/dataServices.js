define(['services/logger'], function (logger) {


    var manager = new breeze.EntityManager('breeze/data'),
        getLetters = function() {
            return breeze.EntityQuery
                .from('Lookups')
                .noTracking()
                .using(manager)
                .execute();
        };

    return {
        getLetters: getLetters,
    };
})