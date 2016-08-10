let commandZipcodeToBarcode=require('./goto-zipcode-to-barcode');
let commandBarcodeToZipcode=require('./goto-barcode-to-zipcode');
let commandExit=require('./goto-exit-page');
let commandInvalidInput=require('./goto-invalid-input-page');
let CommandResponse=require('../main/commandResponse');

class mainPage{
    run() {
        return new CommandResponse({
            text:`
1.translate zipcode to barcode
2.translate barcode to zipcode
3.Quit
Please input your choice(1~3)`,
            newMapping:{
                "1":commandZipcodeToBarcode,
                "2":commandBarcodeToZipcode,
                "3":commandExit,
                "*":commandInvalidInput
            }
        });
    }
}

module.exports=mainPage;