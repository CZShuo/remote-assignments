//Q1
function max(numbers){
    let temp=numbers[0];
    for(let i = 1;i<numbers.length;i++){
        if(numbers[i]>temp){
            temp=numbers[i];
        }
    }
    return temp;
}

//Q2
class Calculate {
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
const test1 = new Calculate(3, 4, '-');

const test2 = {
    n1:5,
    n2:7,
    op:'+'
}

//Q3
function avg(data) {
    let size = data.size;
    let prod = data.products;
    let totalPrice = 0;
    for (let i = 0; i < prod.length; i++) {
        totalPrice += prod[i].price;
    }
    return totalPrice / size;
}

//Q5
function twoSum(nums,target){
    for (let i = 0; i < nums.length;i++){
        if(nums.indexOf(target-nums[i])!==-1 && nums.indexOf(target-nums[i])!==i){
            return [i,nums.indexOf(target-nums[i])];
        }
    }
}



