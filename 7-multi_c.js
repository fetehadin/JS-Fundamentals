/*
Write a script that prints x times “C is fun”

    Where x is the first argument of the script
    If the first argument can’t be converted to an integer, print “Missing number of occurrences”
    You must use console.log(...) to print all output
    You are not allowed to use var
    You can use only two console.log
    You must use a loop (while, for, etc.)

guillaume@ubuntu:~/0x12$ node 7-multi_c.js 2
C is fun
C is fun
guillaume@ubuntu:~/0x12$ node 7-multi_c.js 5
C is fun
C is fun
C is fun
C is fun
C is fun
guillaume@ubuntu:~/0x12$ node 7-multi_c.js 
Missing number of occurrences
guillaume@ubuntu:~/0x12$ node 7-multi_c.js -3
guillaume@ubuntu:~/0x12$ 

if(isNaN(parseInt(process.argv[2]))){
    console.log('Not a number');
}
else{
        console.log('My number: '+ parseInt(process.argv[2]));

}
 */
const x = 'C is fun';
if(isNaN(parseInt(process.argv[2]))){
    console.log('Missing number of occurrences');
}
else{
    const y =parseInt(process.argv[2]);
    for (i=0;i<y;i++){
        console.log(x);
    }

}
