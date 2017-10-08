Rx.Observable.from([0,1,2])
    .subscribe(
        (x)=>console.log('From',x),
        (error)=>console.log(error),
        ()=>console.log('complete')

    );


const arr = [
    {
        id:1,
        name:"Alex"
    },
    {
        id:2,
        name:"Tom"
    }
];

Rx.Observable.from(arr)
    .subscribe(
        (x)=>console.log('From',x),
        (error)=>console.log(error),
        ()=>console.log('complete')

    );

const set = new Set([1,2,3,1,'hi']);

Rx.Observable.from(set)
    .subscribe(
        (x)=>console.log('From',x),
        (error)=>console.log(error),
        ()=>console.log('complete')

    );


const map = new Map([[1,2],[3,4]]);

Rx.Observable.from(map)
    .subscribe(
        (x)=>console.log('From',x),
        (error)=>console.log(error),
        ()=>console.log('complete')

    );