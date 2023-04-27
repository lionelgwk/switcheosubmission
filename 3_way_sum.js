var sum_to_n_a = function(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    var sum = 0;
    var pair_sum = n + 1;
    if (n % 2 == 0) {
        sum = (n / 2) * pair_sum;
    }
    else {
        sum = ((n - 1) / 2) * pair_sum + (n+1)/2;
    }
    
    return sum
};

var sum_to_n_c = function(n) {
    var sum = 0;
    sum = (n * (n + 1)) / 2;

    return sum
};

// tests

console.log(sum_to_n_a(5))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(5))