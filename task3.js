class Calculator{

    static add(a,b){
        if( 1 > a || 1 > b){
            throw new Error('you cannot sum values that are less than 1');
        }

        if(!a || !b){
            throw new Error('you need to write two values');
        }

    return a + b;
    }

    static sustract(a,b){
        if(typeof(a) !== 'number' || typeof(b) !== 'number'){
            throw new Error('only numbers accepteds')
        }

        if(a < b){
            throw new Error('first number should be bigger')
        }
        return a - b;
    }

    static multiply(a,b){
        return a * b;
    }

   static divide(a,b){
        return a / b;
    }
}

module.exports = Calculator;