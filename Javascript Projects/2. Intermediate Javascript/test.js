function fibonacciGenerator(n){
    function fibonacciSequence(n){
        if (n==1){
            return 0;
        }
        if (n==2){
            return 1;
        }
        if (n > 2){
            return fibonacciSequence(n-2) + fibonacciSequence(n-1);
        }
    }

    var fibonacciArray = [];
    for(var i = 1; i < n+1; i++){
        fibonacciArray.push(fibonacciSequence(i))
    }
    console.log(fibonacciArray);
}

fibonacciGenerator(50);