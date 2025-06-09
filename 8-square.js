
if(isNaN(parseInt(process.argv[2]))){
    console.log('Missing size');
}
else{
    const y=parseInt(process.argv[2]);
    for (i=0;i<y;i++){
        console.log('X'.repeat(y));
    }
}
