function getMaxSubSum(arr) {
    let max = 0;
    let total = 0;

    arr.forEach(el => {
        total += el; 
        max = Math.max(max, total);
        if (max < 0) {
            total = 0;
        };
    });
    return maxSum;
  }