var num = [12, 23, 34, 45, 64, 23, 12, 23, 22, 34, 22];
var uniqueNumber = [];
for(var i=0; i<num.length; i++){
    var pos = uniqueNumber.indexOf(num[i]);
    if(pos == -1){
        uniqueNumber.push(num[i])
    }
}
console.log(uniqueNumber);
