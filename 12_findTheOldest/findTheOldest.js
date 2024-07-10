const findTheOldest = function(array) {
    const currentDate = new Date();
    const largest = array.reduce((largest, curr) => {
        if(curr.yearOfDeath != undefined && largest.yearOfDeath != undefined){
            if((curr.yearOfDeath - curr.yearOfBirth) > (largest.yearOfDeath - largest.yearOfBirth)){
                return curr;
            }
            else{
                return largest;
            }
        }
        else{
            if(curr.yearOfDeath == undefined){
                curr.yearOfDeath = currentDate.getFullYear();
            }
            else{
                largest.yearOfDeath = currentDate.getFullYear();
            }
            if((curr.yearOfDeath - curr.yearOfBirth) > (largest.yearOfDeath - largest.yearOfBirth)){
                return curr;
            }
            else{
                return largest;
            }
        }
    });
    return largest;
};

// Do not edit below this line
module.exports = findTheOldest;
