const primeFactors = function(num){

    /* YOUR CODE HERE */
    let result = []

    function factor(n){
        for(let i=2; i<=n; i++){
            if(n % i === 0){
                result.push(i)
                return n / i
            }
        }
    }

    while(num != 1){
        num = factor(num)
    }

    return result.join(" ")


}

module.exports = primeFactors
