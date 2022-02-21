// function runProgram(input) {
//     // Write code here
//     var input = input.split("\n")
//    // console.log(typeof input)
//     var str1=input[0]
//     var str2 = input[1]
  
//   console.log(permutations(str1 , str2))
  
//   function permutations(str1, str2) {
//       if (str1.length !== str2.length) return false;
//       let obj1 = {};
//       let obj2 = {};
//       for (let i = 0; i < str1.length; i++) {
//           obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
//           obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
//       }
//       for (let key in obj1) {
//           if (obj1[key] !== obj2[key]) return "No";
//       }
//       return "Yes";
//   }
    
//   }
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }

function strpermutations(str1,str2) {
    if(str1.length !== str2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for(let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) return "No";
    }
    return "Yes";
}
console.log(strpermutations("abcd","abcd"))