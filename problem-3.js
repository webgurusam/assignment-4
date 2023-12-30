function sortMaker(arr){
    if(!Array.isArray(arr)){
        return 'Please, provide an array of numbers';
    }
    else if(arr.length > 2 || arr.length <= 1){
        return 'Please, provide us only two elements in number';
    }
    else{
        const positiveNumbers = [];
        for(let n of arr){
            if(typeof n !== 'number'){
                return 'Please, input numbers in an array';
            }
            else{
                if(n > 0){
                    if(n > positiveNumbers){
                        positiveNumbers.unshift(n);
                    }
                }
            }
        }
        return positiveNumbers;
    }
}
const arr = [2,3];
const result = sortMaker(arr);
console.log(result);