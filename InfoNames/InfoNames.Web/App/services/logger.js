define(['durandal/system'], function (system) {
    var
        info = function (message) {
            logIt(message, null, null, true, 'info');
        },
        log = function (message, data, source, showToast) {
            logIt(message, data, source, showToast, 'info');
        },
        logSuccess = function (message, source) {
            toastr.success(message);
            system.log(source, message, data);
        },
        logError = function (message, data, source, showToast) {
            logIt(message, data, source, showToast, 'error');
        },
        logIt = function (message, data, source, showToast, toastType) {
            source = source ? '[' + source + '] ' : '';
            if (data) {
                system.log(source, message, data);
            } else {
                system.log(source, message);
            }
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else {
                    toastr.info(message);
                }
            }
        };

    return {
        log: log,
        info: info,
        logError: logError,
        logSuccess: logSuccess
    };
});