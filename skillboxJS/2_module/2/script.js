let yearOne = prompt('Ведите ранний год');
let yearTwo = prompt('Ведите более поздний год');

if ( yearOne > yearTwo && yearOne > 0 && yearTwo > 0 ) {

    alert('Ранний год не может быть больше поздего!!!');

} else if ( yearOne < yearTwo && yearOne > 0 && yearTwo > 0 ) {

    function chooseYears(start, end) {
            let yearArray = [];
            for (let i = start; i <= end; i++) {        
                yearArray.push(i);
            }
            let result = [];

    yearArray.forEach(function(year) { 
        if (getLeapYear(year)) 
        result.push(year);
    });

    return result;
    }

    function getLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
        }
    }

    document.writeln(chooseYears(yearOne,yearTwo));

} else {

    alert('Год не  может быть отрецательным!!!');

}


console.log(chooseYears(1900,2019));


