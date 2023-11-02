// function addfood() {
//     let food = get("food");
//     let open='close';
//     let mypromise=new Promise(function(resolve,reject){
//         if(open=="open"){
//             resolve(food)
//         }
//         else{
//             reject('error')
//         }
//     })
//     mypromise.then(function(food){
//         console.log(food)
//     }).catch( (error)=>{
//         console.log(error)
//     }).finally(()=>{console.log('got it');})
// }

// function get(id) {
//     return document.getElementById(id).value;
// }
// addfood()
/*
const promisefive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error =true
        if(!error){
            resolve({username:'pintu',pas:123})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    },100)
})
async function cunsmfive(){
    // try {
    //     const res=await promisefive
    //     console.log(res)
    // } catch (error) {
    //     console.log(error);
    // }
    const res = await promisefive
    console.log(res)
}
cunsmfive()
*/
/*
//this is use for async await function
async function api(){
    try {
        const res = await fetch('https://google.com')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("error",error)
    }
}
api()
*/
fetch('https://api.github.com/users/Pintuprusty96')
.then(function(res){
    return res.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{console.log(error)})