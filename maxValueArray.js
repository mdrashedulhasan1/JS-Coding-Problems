var ages = [12, 34, 45, 56, 67, 78, 34];
var max = ages[0];
for(var i=0; i<ages.length; i++){
    if(max<ages[i]){
        max = ages[i];
    }
}
console.log(max);

