// TASK1  AND TASK2


// const array = [23,45,22,36,-45,84, [1,2,3] ,'jasbdaj'] 

// let result = 0

// for (let i = 0; i< array.length; i++){

//     if(typeof array[i]== 'number'){
//         result += array[i]

//     }
// }


// console.log(result)








//TASK 3

// var cut=0 , tek=0

// function func(){
//     const array2 = [1, 5, 20, 32, 54, 79, 82, 91, 564, 351].forEach(function(element){
        

//         if(element%2 == 0){   
           
            
//             cut+=1;
//         }
//         else{
            
//             tek+=1
//         }


//     })

//     console.log("cut = " + cut + ",tek = "+ tek)


// }

// func()










//TASK4

// var array3 = ['Tofiq', 'Ruslan', 'Səma', 3, null, 'Məhəmməd', {'type': "user"}, [1, 2, 3]]
      
// for(var a in array3){
//     if(typeof array3 [a] === "string"){
//         console.log(array3[a])
//     }
// }
















// TASK5


// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
//  ].forEach(function(element){
//     console.log(element.title)
//  })















//TASK6


// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
//  ].forEach(function(element){
//     if(element.readingStatus == true){
//         console.log(element.title)
//     }
//  })









//TASK 7

// function func(array) {
//     let result = {};
//     for (let i = 0; i < array.length; i++) {
//       let element = array[i];
//       if (result[element] === undefined) {
//         result[element] = 1;
//       } else {
//         result[element]++;
//       }
//     }
//     return result;
//   }

//   let array = [1, 1, 5, 'Mahammad', 'Mahammad', null, null, null, undefined, undefined, 4, 5, 5, 4];
// let result = func(array);
// console.log(result);