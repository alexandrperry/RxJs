Rx.Observable.of()
    .defaultIfEmpty('Empty')
    .subscribe((x)=>console.log('of',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.from([1,2,3,4])
    .every((x)=>x%2 === 0)
    .subscribe((x)=>console.log('every',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.from([1,2,3,4])
    .do((x)=> console.log(x))
    .subscribe((x)=>console.log('do',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.from([1,2,3,4])
    .delay(3000)
    .subscribe((x)=>console.log('delay',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );


Rx.Observable.from([1,2,3,4])
    .map((x)=>x+1)
    .let((observer) => observer.map(x=>x+2))
    .subscribe((x)=>console.log('let',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );