var myName = "ABCDEF";
var revString = ""
for(var i=0; i<myName.length; i++){
    var normalString = myName[i]
    revString = normalString+revString;
}
console.log(revString);