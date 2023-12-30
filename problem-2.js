function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please, provide us string type data';
    }
    else{
        if(string1.toLowerCase().includes(string2.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
    }
}
const string1 = 'Peter Parker';
const string2 = 'Pen';
const result = matchFinder(string1, string2);
console.log(result);