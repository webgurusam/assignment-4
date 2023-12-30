function sortMaker(arr){
    if(!Array.isArray(arr)){
        return 'Please, provide an array of numbers';
    }
    else if(arr.length > 2 || arr.length <= 1){
        return 'Please, provide us only two elements by number in array';
    }
    else{
        for(let i = 0; i < arr.length; i++){
            const x = arr[0];
            const y = arr[1];
            if(typeof x !== 'number' || typeof y !== 'number'){
                return 'Please, input numbers in an array';
            }
            else if(x < 0 || y < 0){
                return 'Invalid Input';
            }
            else if(x > 0 && y > 0){
                if(x === y){
                    return 'equal';
                }
                else{
                    arr.sort(function(a,b){
                        return b - a;
                    });
                    return arr;
                }
            }
    
        }
    }
}
const arr = [2,3];
const result = sortMaker(arr);
console.log(result);


