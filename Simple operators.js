Rx.Observable.of(5,4,10,'str',[2,4,2])
    .subscribe((x) => {
    console.log('Next:', x);
    },
    (error)=>{console.log(error)},
    ()=>{console.log('completed')}
)

/*
Rx.Observable.interval(500)
    .take(10)
    .subscribe((x) => {
            console.log('Next:', x);
        },
        (error)=>{console.log(error)},
        ()=>{console.log('completed')}
    );


Rx.Observable.timer(1000,500)
    .take(10)
    .subscribe((x) => {
            console.log('Next:', x);
        },
        (error)=>{console.log(error)},
        ()=>{console.log('completed')}
    );
 */


Rx.Observable.range(3,5)
    .subscribe((x) => {
            console.log('Next:', x);
        },
        (error)=>{console.log(error)},
        ()=>{console.log('completed')}
    );
