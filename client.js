const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

/*class Employee {
  constructor(nameIn, employeeNumberIn, annualSalaryIn, reviewRatingIn ){
    this.name = nameIn;
    this.preBonusPercentage = this.preBonusPercentage( reviewRatingIn, employeeNumberIn );
    this.finalBonusPercentage = this.finalBonusPercentage( this.preBonusPercentage, annualSalaryIn );
    console.log(this.finalBonusPercentage);
    this.totalCompensation = this.totalCompensation();
    this.totalBonus = this.totalBonus();
  }
  preBonusPercentage( reviewRatingIn, employeeNumberIn ){
    if ( reviewRatingIn <= 2 ){
      let bonusPercent = 0;
      if ( employeeNumberIn.length >= 4 ){
        bonusPercent = bonusPercent + 0.05;
        return bonusPercent;
      }
      else {
        return bonusPercent;
      }
    }
    else if ( reviewRatingIn == 3 ) {
      let bonusPercent = 0.04;
      if ( employeeNumberIn.length >= 4 ){
        bonusPercent = bonusPercent + 0.05;
        return bonusPercent;
      }
      else {
        return bonusPercent;
      }
    }
    else if ( reviewRatingIn == 4 ) {
      let bonusPercent = 0.06;
      if ( employeeNumberIn.length >= 4 ){
        bonusPercent = bonusPercent + 0.05;
        return bonusPercent;
      }
      else {
        return bonusPercent;
      }
    }
    else if ( reviewRatingIn == 5 ) {
      let bonusPercent = 0.10;
      if ( employeeNumberIn.length >= 4 ){
        bonusPercent = bonusPercent + 0.03;
        return bonusPercent;
      }
      else {
        return bonusPercent;
      }
    }
  }
  finalBonusPercentage( preBonusPercentage, annualSalaryIn ){
    if ( annualSalaryIn > 65000 ) {
      if (this.preBonusPercentage == 0){
        return this.preBonusPercentage;
      }
      else {
        let bonusPercent = this.preBonusPercentage - 0.01;
        return bonusPercent;
      }
    }
    else if ( annualSalaryIn <= 65000 ){
      return this.preBonusPercentage;
    }
  }
  totalCompensation(){

  }
  totalBonus(){

  }
}


function updateEmployee( employeeIn ){
  let employeeUpdated = new Employee( employeeIn.name );
  return employeeUpdated;
}
*/



// Walkthrough with Chris
/*const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];*/

class Employee {
  constructor(nameIn, bonusPercentageIn,totalCompensationIn, totalBonusIn ) {
    this.name = nameIn;
    this.bonusPercentage = bonusPercentageIn;
    this.totalCompensation = totalCompensationIn;
    this.totalBonus = totalBonusIn;
  }
}


for (employee of employees) {
  console.log(employee);
let name = employee.name;
let bonusPercentage = baseBonus(employee.reviewRating) +
                   lengthOfServiceBonus(employee.employeeNumber) +
                   salaryAdjustment(employee.annualSalary);
let finalBonus = finalAjustment(bonusPercentage);
let totalBonus = employee.annualSalary * bonusPercentage;
let actualBonusInDollars = employee.annualSalary * finalBonus;
let compensation = employee.annualSalary + totalBonus;
  const employeeWithBonus = new Employee(name, finalBonus, compensation, actualBonusInDollars );
}


 function finalAjustment(bonusPercentageIn) {
  if (bonusPercentageIn > 0.13) {
    return 0.13;
  } else if (bonusPercentageIn < 0) {
    return 0;
  } else {
    return bonusPercentageIn;
  }
}// end finalAjustment
// console.log(employees);
// console.log(baseBonus(scout.reviewRating));
// console.log(lengthOfServiceBonus(scout.employeeNumber));
// console.log(salaryAdjustment(60000));
// console.log(finalAjustment());
//
//
//
// console.log(bonusPercentage);
// let finalBonus = finalAjustment(bonusPercentage);
// console.log(finalBonus);


function salaryAdjustment(currentSalary) {
  if (currentSalary > 65000) {
    return -0.01;
  } else {
    return 0;
  }
}//end salaryAdjustment

function lengthOfServiceBonus(employeeNumber) {
  if (employeeNumber.length === 4 ) {
    return 0.05;
  }else {
    return 0;
  }
}//end lengthOfServiceBonus

// expecting a number representing a rating (0-5)
function baseBonus(rating) {
  console.log(rating);
  if (rating<=2) {
    return 0;
  } else if (rating === 3) {
    return 0.04;
  } else if (rating === 4) {
    return 0.06;
  }else if (rating === 5) {
    return 0.10
  }
}//end baseBonus
