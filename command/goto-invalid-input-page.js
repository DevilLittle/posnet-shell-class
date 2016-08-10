let CommandResponse=require('../main/commandResponse');
class invalidInput{
    run(){
        return new CommandResponse({
            text:'please give right input '
        });
    }
}
module.exports=invalidInput;