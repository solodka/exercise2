function example() {
    "use strict";
    return true;
}

let 
    money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expensesSum = 0;
for (let i = 0; i < 2; i++){
    let costName = prompt("Введите обязательную статью расходов в месяце", ""),
        costSum = prompt("Во сколько обойдется?","");
        if(
            typeof(costName) == 'string' && 
            typeof(costName) != null &&
            typeof(costSum) != 0 && 
            costName != '' && 
            costSum != '' && 
            costName.length < 50
        )
        {
            appData.expenses[costName] = +costSum;
            expensesSum += +costSum; 
        }
        else {

    }              
}

let budgetForDay = (money - expensesSum)/30;

alert("Ежедневный бюджет: " + budgetForDay.toFixed(2));
if (budgetForDay < 100){
    console.log('Минимальный уровень достатка'); 
} else if (budgetForDay > 100 && budgetForDay < 2000) {
    console.log('Средний уровень достатка'); 
} else if (budgetForDay >= 2000){
    console.log('Высокий уровень достатка'); 
}
else {
    console.log('Ошибка!');  
}
console.log(appData);

