/// method 1///////////

// setTimeout(()=>{
//     console.log("suresh")
// },2000)

/// method 2///////////

// const myCallBack=()=>{

//     console.log("i am suresh")

// };

// setTimeout(myCallBack,2000);

/// method 3///////////

// function fullName(name){
//     console.log('my name is Durai'+name )
// }

// function greetuser(myName){
// const name =myName.toUpperCase()
//     console.log("hi my name is "+ name)

//     setTimeout(fullName,2000,name);

// }

// greetuser("suresh");


//////////// method 4///////////

// function fullName(myName){
//     console.log("my name is Drai"+myName)

// }


// function greetuser(myName){
//     const name=myName.toUpperCase();
//     console.log("hi this is "+ myName)

//     setTimeout(fullName,2000,myName)
// }

// greetuser("suresh")


///// Assignment ///////////


// function threesecond(){
//     setTimeout(()=>{
//         console.log("callback have done  Drai")  
//     },3000);
// }



// function fullName(myName,callBack){

//     setTimeout(()=>{
//         console.log("my name is Drai"+myName)  
//     },2000)
//     callBack()

// }


// function greetuser(myName,callBack){
//     const name=myName.toUpperCase();
//     console.log("hi this is "+ myName)

//     callBack(myName,threesecond)

// }

// greetuser("suresh",fullName)



///call back  chain/////

// function first(callback){
//     setTimeout(()=>{ console.log("this is first")
//         callback()
//     },2000)

   
// }

// function second(callback){
//     setTimeout(()=>{
//         console.log("this is second")
//         callback()
//     },2000)
        
    
// }

// function third(){
//     setTimeout(()=>{console.log("this is third")

//     },2000)
    
// }

// first(()=>second(()=>third()))


///////////promises////////

   gdggdgkgkgg.fg



// const promise = new Promise((resolve, reject) => {
//     // Perform an async operation
//     let success = true; // For demonstration
//     if (success) {
//       resolve("Operation succeeded!");
//     } else {
//       reject("Operation failed!");
//     }
//   });
//   promise
//   .then(response => {
//     console.log(response); // Logs "Operation succeeded!" if resolved
//   })
//   .catch(error => {
//     console.log(error); // Logs "Operation failed!" if rejected
//   });

const project=new Promise((resolve,reject)=>{
  let success=true;
if(success){
  resolve("success ok bye");
}else{
  reject("unsucess damit");
}
})
project
.then(final=>{
console.log(final)
})
.catch(Error=>{
console.log(Error)
});
