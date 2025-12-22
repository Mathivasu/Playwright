
/*classRoom:
 1. data ["chrome",true,132.8]
add index 5 -> webkit
pop->
use push -> firefox
use shift ->
use for..of to print value
*/

let data = ["chrome",true,132.8]
data[5] = "webkit"
console.log(data)
data.pop()
console.log(data)
data.push("firefox")
console.log(data)
data.shift()
console.log(data)
for( num of data){
console.log(num)
}
