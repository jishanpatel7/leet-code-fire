function runProgram(input) {
    // Write code here
  var input = input.split("\n")
  var test = +input[0];
  //console.log(input)
  var line =1;
  for(var i =0; i <test; i++) {
      var [N,K]=input[line++].split(" ").map(Number);
     // console.log(N)
      var arr = input[line++].split(" ").map(Number)
      //console.log(arr)
      console.log(lifeBoats(N,K,arr))
  }
   function lifeBoats(N,K,arr){
   arr.sort((a,b) => a-b);
   let boats = 0;
   let left =0;
   let right = N-1;
   
   while(left < right) {
       const w1 = arr[left];
       
       const w2 = arr[right];
       const total = w1 + w2;
       
       if(total <= K) {
           boats++;
           left++;
           right--;
       } else if(total > K) {
           boats++;
           right--;
       }
   }
   if(left == right)
   boats++;
   return boats;
   }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }