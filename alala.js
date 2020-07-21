function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

console.log(range(10));