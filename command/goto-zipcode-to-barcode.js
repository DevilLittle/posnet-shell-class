let CommandResponse=require('../main/commandResponse');
class ZipcodeToBarcode {
    run (){
        return new CommandResponse({
            text:'please input zipcode :',
            newMapping:{
                "*":require('./zipcodeToBarcode')
            }
        });
    }
}
module.exports=ZipcodeToBarcode;
