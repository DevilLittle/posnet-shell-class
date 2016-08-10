let Route=require('./route');
let readline=require('readline');

const route=new Route();

function sendToRoute(line) {
    let response=route.handle(line);
    console.log(response.text.text);

    if(response.rerun){
        sendToRoute(line);
    }
}

function start(line) {
    let rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout,
        terminal:false
    });

    rl.on('line',function (line) {
        sendToRoute(line);
    });

    sendToRoute();
}

module.exports=start;