function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

///answer: Finds prime numbers. The big O notation is O(n). It has to go through all numbers until it gets to the input number.