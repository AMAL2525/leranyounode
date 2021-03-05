var result = 0
for (var i = 2; i <= process.argv.length-1; i++) {
    var num = Number(process.argv[i])
    if(num){
        result = result + num
    }

}
