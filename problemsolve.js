// 1. print all even numbers from 1 - 20

// jehetu 1 theke 20 porjonto print korte hobe tai loop lagbe karon eki jinish bar bar hocche.. 

// ekhon even number khujte hobe.. ar eita pawyar jonno condition use korte hobe.. 

// mane kono number 2 diye vag deyar por vagsesh 0 hobe oitai hocche even number.. ar vagsesh 1 thakle ODD. 

// sob program er 1st kaj function likhboo.. 


function printEven(){
    for( let i = 1; i <= 20; i++){
        // console.log(i);

        if(i%2 == 0) {
            console.log(i);
        }

    }
}

// printEven();



//  2. Count numbers devisible by 3 from 1 - 20 ( 1 theke 20 er moddhe mot koyta number show korbe eita ber korbo )

// eikhane for ba if er moddhe return korbo na, tahole just ekbar print kore ar kaj korbe na.. 


function countDivisibleNumberByThree(){

    // count variable ta amra loop er moddhe use korbo na.. 
    // karon loop e use korle, oita bar bar ghurbe, condition check korbe ar count er maan abar 0 kore dibe..
    // tai eisob khetre ei variable gula loop er baire use korbo.. jehetu eikhane mot number lagbe.. 

    let count = 0;

    for (let i  = 1; i <= 20; i++){

        if(i%3 == 0){
            // console.log(i);
            count = count + 1;
        }
    }

    return count;
}


// console.log(countDivisibleNumberByThree())

// let result = countDivisibleNumberByThree();

// console.log(result);



//  3. Calculate the average of all the numbers taht is divisible by 3 from 1 - n 

// sum er sathe i jog korsi karon i er moddhe sob value ase.. ar count er sathe 1 jog korsi karon 1 kore barbe man


function avgOfDivisibleNumbersByThree(n){

    let sum = 0, count = 0;

    for(i = 1; i <= n; i++){
        if(i%3 == 0){
            sum = sum + i; 
            count = count + 1;
        }
    }

    let avg = sum / count;

    return avg;
}

let result = avgOfDivisibleNumbersByThree(9);

console.log(result);

