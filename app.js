// // 1-masala
// {
//     let arr = [1,3,4,1]
    
//     let target = 9
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         for(let g = 0; g < i; g++){
//             if((arr[i] + arr[g]) === target){
//                 result.push(arr[i],arr[g])
//             }
//         }
//     }
//     console.log(result)
// }
// // 2-masala
// {
//     let arr = [1,2,3,5,4,32,2,3]
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     console.log(result);
// }
// // 3-masala
// {
//     function get(n){
//             let result = []
//             for(let i = 1; i <= n; i++){
//                 result.push(2 ** i)
//             }
//             return result
//         }   
//         console.log(get(4));
// }
// // 4-masala
// {
//     const arr = num =>{
//             let sum = 0
//             for(let i = 1; i <= num; i++){
//                 sum += i
//             }
//             console.log(sum);
//             return sum
//         }
//         arr(+prompt('son kiriting'))
// }
// // 5-masala
// {
//     const arr = (...num) => {
//     let sum = num.reduce((a,b) => a+b)
//     return Array.from(String(sum),Number)    
// }

// console.log(arr(1,26,3));
// }
// // 6-masala
// {
//     function boo(input) {
//         let str = input.toString();
//         let reversedStr = str.split('').reverse().join('');
//         return str === reversedStr;
        
//     }
//     console.log(boo("salom"));  // true
//     console.log(boo(121));      // true
//     console.log(boo("hello"));  // false
//     console.log(boo(123));      // false
// }    
// // 7-masala
// {
//     const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// }
// let object = Object.values(obj).reduce((a,b) => a + b)
// let result = object.toString().split('').reduce((a,b)=> a + Number(b),0)
// console.log(object,result);
// }
// // 8-masala
// {
//     function foo(soz) {
//         let a = "aeiouAEIUO"
//         let count = 0
//         for(let i of soz){
//             if (a.includes(i)) {
//                 count++    
//                 console.log(count,i);
//             }
//         }
//     }
    
//     foo('Salom dunyo')
// }
// // 9-masala
// {
//     function odds(n) {
//     let toq = []; 
//     for (let i = 0; i < n; i++) {
//         toq.push(2 * i + 1); 
//     }
//     return toq;
// }


// console.log(odds(4)); 
// }
// // 10-masala
// {   
// let arr = [1,2,3,5,6,1,2,3]
// console.log(arr);
// let result = []
// for(let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i])
//     }
// }
// console.log(result);
// }
