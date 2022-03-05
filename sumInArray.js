// var nums = [12, 23, 34, 56, 21, 36];
// var sum = 0;
// for(var i=0; i<nums.length; i++){
//     sum = sum+nums[i];
// }
// console.log(sum);


//Using Function
function sumOfArray(nums){
    var sum = 0;
    for(var i=0; i<nums.length; i++){
    sum = sum+nums[i];   
}
return sum;
}
var total = sumOfArray([12, 23, 34, 56, 21, 36]);
console.log(total);