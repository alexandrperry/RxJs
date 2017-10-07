console.log(Rx);

let stream$ = Rx.Observable.create(function (observer) {
    observer.next('Test');

    setTimeout(function () {
        observer.next('Test2sec next()');
    },2000);

    setTimeout(function () {
        observer.complete('Test3sec complete()');
    },3000);

    setTimeout(function () {
        observer.next('Test5sec next()');
    },5000);
    setTimeout(function () {
        observer.error('Error:10sec');
    },10000);
})


stream$.
    subscribe(
        function (data) {
            console.log('Subscribe',data);
        },
        function (error) {
            console.log('Error',error);
        },
        function () {
            console.log('Complete');
        }
        );
    