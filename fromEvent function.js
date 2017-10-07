let button = document.querySelector('button');

let btn$ = Rx.Observable.fromEvent(button,'click');

btn$.subscribe(function (event) {
    console.log(event);
});

let input = document.querySelector('input');

Rx.Observable
    .fromEvent(input,'keyup')
    .subscribe(function (event) {
        console.log(event);
    });


