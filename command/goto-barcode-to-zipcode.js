let CommandResponse = require('../main/commandResponse');
class BarcodeToZipcode {
    run() {
        return new CommandResponse({
            text: 'please input barcode',
            newMapping: {
                "*": require('./barcodeToZipcode')
            }
        });
    }
}

module.exports = BarcodeToZipcode;


