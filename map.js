
Rx.Observable.interval(1000)
    .map((val)=> val*2)
    .take(5)
    .subscribe((x)=>console.log('Map',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.of('hi')
    .map((val)=> val.toUpperCase())
    .subscribe((x)=>console.log('Map',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.fromEvent(document.querySelector('input'),'keyup')
    .map((val)=> val.target.value.toUpperCase())
    .map((val)=>{
        return{
            name: val
        }
    })
    .subscribe((x)=>console.log('Map',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );


Rx.Observable.fromEvent(document.querySelector('input'),'keyup')
    .pluck('target','value')
    .map((val)=>{
        return{
            name: val
        }
    })
    .subscribe((x)=>console.log('Map',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );
