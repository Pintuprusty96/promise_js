
function append(s) {

    return new Promise(function(resolve,reject){

        let script = document.createElement("script");
        script.src = s;
        document.head.append(script);
        script.onload=function(){
            resolve('loading done')
        }
        script.onerror=function(){
            reject('loading not done')
        }
    })

//   console.log('document',document)
}


async function handle()
{
    let res =await append('./script1.js')

    console.log("res is  ",res)
}
handle()







/*
append("./script1.js")
.then(function(res){            //.then or .catch allows us to handle the values of promise
    console.log('res',res)
    hello( )
})
.catch(function(qua){
    console.log('qua',qua)
})
*/







// let mypromise = new Promise(function (resolve, reject) {
//     resolve('success')
//     // reject('goodbay')
// })
// console.log(mypromise)
