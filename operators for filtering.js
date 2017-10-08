Rx.Observable.range(0,5)
    .filter(x => x<2)
    .subscribe((x)=>console.log('Filter',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );

const arr = [{name:'Rome',people:5000000},{name:'London',people:1000000},{name:'Barcelona',people:7000000}];

Rx.Observable.fromEvent(document.querySelector('input'),'keyup')
    .map((e)=>e.target.value)
    .subscribe((x)=>{
        Rx.Observable.from(arr)
            .filter((val) => val.name==x)
            .subscribe((data)=>{
                document.querySelector('p').innerHTML = `${data.people}`
            })
    });


Rx.Observable.fromEvent(document.querySelector('input'),'keyup')
    .map((e)=>e.target.value)
    .distinct()
    .debounceTime(2000)
    .subscribe((x)=>console.log('debounceTime',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
);

Rx.Observable.from([1,1,22,22,5,5,7,7])
    .distinctUntilChanged()
    .subscribe((x)=>console.log('distinctUntilChanged',x),
        (error)=>console.log(error),
        ()=>console.log('complete')
    );


