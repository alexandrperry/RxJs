
let delay = (msi = 1000) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(msig),msi)
    })
}


let data$ = Rx.Observable.fromPromise(delay(3000))
    .subscribe((x)=>console.log('From',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

