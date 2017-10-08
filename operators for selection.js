Rx.Observable.of(1,4,"hi")
    .first()
    .subscribe((x)=>console.log('First',x),
    (error)=>console.log(error),
    ()=>console.log('complete')
);

Rx.Observable.of(1,4,"hi")
    .last()
    .subscribe((x)=>console.log('Last',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );


Rx.Observable.of(1,4,"hi")
    .find((x)=>x===4)
    .subscribe((x)=>console.log('Find',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.of(1,4,"hi")
    .findIndex((x)=>x===4)
    .subscribe((x)=>console.log('FindIndex',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.of(1,4,"hi")
    .take(2)
    .subscribe((x)=>console.log('Take',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.of(1,4,"hi")
    .skip(1)
    .subscribe((x)=>console.log('Skip',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.of(1,4,"hi")
    .skipWhile((x)=>typeof(x)==="number")
    .subscribe((x)=>console.log('skipWhile',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(2000))
    .take(10)
    .subscribe((x)=>console.log('skipUntil',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

