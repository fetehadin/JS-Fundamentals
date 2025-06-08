/*
Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

    If the argument can’t be converted to an integer, print “Not a number”
    You must use console.log(...) to print all output
    You are not allowed to use var
    You are not allowed to use try/catch

guillaume@ubuntu:~/0x12$ node 5-to_integer.js 
Not a number
guillaume@ubuntu:~/0x12$ node 5-to_integer.js 89
My number: 89
guillaume@ubuntu:~/0x12$ node 5-to_integer.js "89"
My number: 89
guillaume@ubuntu:~/0x12$ node 5-to_integer.js 89.89
My number: 89
guillaume@ubuntu:~/0x12$ node 5-to_integer.js School
Not a number
guillaume@ubuntu:~/0x12$ 

if(process.argv[2]===undefined){
    console.log('No argument');
}
else{
    console.log(process.argv[2]);
}

*/
if(isNaN(parseInt(process.argv[2]))){
    console.log('Not a number');
}
else{
        console.log('My number: '+ parseInt(process.argv[2]));

}