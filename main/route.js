let commandMainPage=require('../command/goto-main-page');
let RouteResponse=require('./routeResponse');

const defaultMapping={
    "*":new commandMainPage()
};

class Route{
    constructor(){
        this.mapping=defaultMapping;
    }

    handle(input){
        let command=this.mapping[input]||this.mapping['*'];
        console.log('-------'+command);
        console.log(command.run());
        let response=command.run(input);

        if(response.error){
            return new RouteResponse({
                text:response.text
            })
        }
        if(response.reset){
            this.mapping=defaultMapping;
            return new RouteResponse({
                text:response.text,
                rerun:true
            })
        }
        if(response.newMapping){
            this.mapping=response.newMapping;
            return new RouteResponse({
                text:response.text,
            })
        }

        return new RouteResponse({
            text:response.text
        })
    }
}

let a=new Route();
console.log(a);
console.log(a.handle());
console.log(a.handle(1));
module.exports=Route;