const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

class Employee {
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
