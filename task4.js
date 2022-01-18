function capitalize(string){
    if(typeof(string) !== 'string'){
        throw new Error();
    }
    return string.toUpperCase();
}

module.exports = capitalize;