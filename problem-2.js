function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please, provide us string type data';
    }
}
const string1 = 5;
const string2 = 'ohn';
const result = matchFinder(string1, string2);
console.log(result);