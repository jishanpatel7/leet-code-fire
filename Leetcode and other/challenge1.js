//problem challenge 
//const _ = require("lodash");
function main(input) {
    //Enter your code here
    input = input.split("\n");
    let n = parseInt(input[0]);
    let arrayN = input[1].split(" ");
    let m = parseInt(input[2]);
    let arrayM = input[3].split(" ");
    let maxM = -1;
    //console.log("array",arrayM, arrayN);
    for(i=0;i<arrayM.length;i++) {
        let valm = arrayM[i];
        //console.log(valm);
        valm = parseInt(valm);
        if(maxM < valm) {
            maxM = valm;
        }
    }
    let money = 0;
    maxM+=1;
    for(i=0;i<arrayN.length;i++)  {
        let valn = arrayN[i];
        //console.log(valn);
        valn = parseInt(valn);
        if(valn < maxM) {
            money += (maxM-valn);
        }
    }
    console.log(money);
}
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 