function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'Please, provide a number';
    }
    else if(number <= 0){
        return 'Please, provide a positive number';
    }
    else{
        const cube = number * number * number;
        return cube;
    }
}
const number = 4;
const result = cubeNumber(number);
console.log(result);