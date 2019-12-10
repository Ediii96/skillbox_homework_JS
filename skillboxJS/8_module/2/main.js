'use strict';

function filterByType(){
    let args = Array.from(arguments);
    
    args = args.slice(1).filter(function(e) {
        return typeof e === args[0];
    });

    return args;
    
}

console.log( filterByType('string', 3, 'cryack', 2, true, 'kokoko', false, 'tadddaaaam', 456) );
console.log( filterByType('number', 3, 'cryack', 2, true, 'kokoko', false, 'tadddaaaam', 456) );
console.log( filterByType('boolean', 3, 'cryack', 2, true, 'kokoko', false, 'tadddaaaam', 456) );
