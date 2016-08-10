let {convertZipcodeToBarcode}=require('../core/core');
let CommandResponse=require('../main/commandResponse');
class ZipcodeToBarcode {
    run(zipcode) {
        let barcode = convertZipcodeToBarcode(zipcode);
        if(barcode.startsWith('invalid zipcode :')){
            return new CommandResponse({
                error:'please give right input'
            });
        }
        return new CommandResponse({
            text:barcode,
            reset:true
        });
    }
}

module.exports=ZipcodeToBarcode;