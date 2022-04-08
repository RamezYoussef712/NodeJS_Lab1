const greeting = function(name, birthdate){
    if(name === '' || birthdate === ''){
        throw "You must enter your name and birthdate!"
    }
    
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (birthdate.match(regex) === null) {
        throw "Birthdate pattern must match 'DD/MM/YYYY'!";
    }

    const [day, month, year] = birthdate.split('/');

    // 👇️ format Date string as `yyyy-mm-dd`
    const formattedBD = `${year}-${month}-${day}`;
    const date = new Date(formattedBD);
    
    if (date instanceof Date && isNaN(date.getTime())) {
        throw ("Invalid date!");
      }

    let month_diff = Date.now() - date.getTime();
    let age_dt = new Date(month_diff);
    let age = Math.abs(age_dt.getUTCFullYear() - 1970);
    
    return `Hello ${name}, your age is ${age}!`;
}

module.exports = greeting;