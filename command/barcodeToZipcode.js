let {convertBarcodeToZipcode}=require('../core/core');
let CommandResponse = require('../main/commandResponse');

class barcodeToZipcode {
    run(barcode) {
        let zipcode = convertBarcodeToZipcode(barcode);
        if (zipcode.startsWith('invalid input :')) {
            return new CommandResponse({
                error: 'please give right input'
            });
        }
        return new CommandResponse({
            text: zipcode,
            reset: true
        });
    }
}

module.exports = barcodeToZipcode;