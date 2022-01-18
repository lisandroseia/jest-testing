function countChars(string){
    if(string.length < 1 || string.length > 10){
        throw new Error('Check fail');
    }
    return string.length;
}

module.exports = countChars;