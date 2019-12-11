const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function checkEmployeeData(employee) {
  let newName = employee.name;
  let bonusPercentage = calculateBonusPercentage(employee);
  
  let totalCompensation = Number(employee.annualSalary) * bonusPercentage
  let totalBonus = Number(employee.annualSalary) + totalCompensation;
  // totalBonus = parseInt(totalBonus)


  
  
  
  
  
  let newObject = {
    name: newName,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }



  return newObject;

}

function calculateBonusPercentage(employeeToCalculate){
  let rating = employeeToCalculate.reviewRating;
  let totalBonusPercentage = 0;
  let numberLength = employeeToCalculate.employeeNumber.length;
  let annualSalary =  employeeToCalculate.annualSalary;

  if (rating <= 2){
    return totalBonusPercentage;
  }
  else if (rating === 3){
    totalBonusPercentage = 4;
  }
  else if (rating === 4){
    totalBonusPercentage = 6;
  }
  else if (rating === 5){
    totalBonusPercentage = 10;
  }
  
  if (numberLength === 4){
    totalBonusPercentage = totalBonusPercentage + 5;
  }

  if (annualSalary > 65000){
    totalBonusPercentage = totalBonusPercentage -1;
  }

  if (totalBonusPercentage > 13){
    totalBonusPercentage = 13;
  }

  if (totalBonusPercentage < 0){
    totalBonusPercentage = 0;
  }
  return totalBonusPercentage*0.01;
}

let newEmployeeData = [];
for (let taco of employees) {
  
  newEmployeeData.push(checkEmployeeData(taco));
  
  
}


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
console.log(newEmployeeData);


