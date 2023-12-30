function findAddress(obj){
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    if(typeof obj !== 'object'){
        return 'Please, provide us a object';
    }
    else{
        const address = street + ', ' + house + ', ' + society;
        return address;
    }
}
const obj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
const result = findAddress(obj);
console.log(result);