function canPay(changeArray, totalDue){
    if(!Array.isArray(changeArray)){
        return 'Please, provide us array of numbers';
    }
    else if(changeArray.length === 0){
        return 'Please, input numbers in an array';
    }
    else{
        let sumOfTk = 0;
        for(let tk of changeArray){
            if(typeof tk !== 'number'){
                return 'Please, provide us a number';
            }
            else if(tk < 0){
                return 'Please, provide us a positive number';
            }
            else{
                sumOfTk += tk;
            }
        }
        if(typeof totalDue !== 'number'){
            return 'Please, provide us a number';
        }
        else if(totalDue < 0){
            return 'Please, provide us a positive number';
        }
        else{
            if(sumOfTk >= totalDue){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
const myMoney = [1,5,5];
// const myMoney = [1,5,5];
const chipsPrice = 10;
const result = canPay(myMoney, chipsPrice);
console.log(result);