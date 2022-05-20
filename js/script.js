//#region Task1
//Bir method olsun iki parametr qəbul etsin və bu parametrlərdən birincini ikinciyə bölüb nəticəni geri qaytarsın.
let x1 = 25;
let x2 = 5;

console.log(Sum(num1=x1,num2=x2));

function Sum (num1,num2)
{
    return num1 / num2;
}
//#endregion

//#region Task2
//Repeat deyə bir method olsun və iki parametr qəbul etsin biri "word" digəri "count" yəni bu şəkildə "Repeat(string word, int count)"
//bu method göndərilən word-ü göndərilən count qədər yan-yana yazdırıb geri qaytarsın. Məsələn:
//Repeat("Ha!") //Ha!
//Repeat("Ha!", 2) //Ha!Ha!
//Repeat("Ha!", 3) //Ha!Ha!Ha!

let x3 = "Ha!";
let x4 = 3;

console.log(Repeat(x3,x4));

function Repeat(word,count)
{
    let Word = "";
    for (let i = 0; i < count; i++) {

        Word += word;
    }
    return Word;
}
//#endregion

//#region Task3
//Bir method olsun göndərilən "n" sayda ədədin hamsını toplayıb geri qaytarsın.

let arr=[25,25,25,25];

console.log(Grather(arr));

function Grather(array) {
    
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        
        sum+=array[i]
    }

    return sum;
}

//#endregion

//#region Task4
let a = 4;
let b = 5;
let c = 3;
let r = 5;




function sahe(a,b) {
    return a*b
}
function cevre(a,b,c,r){

p=(a+b+c)/2
return p*r

}

console.log(sahe(a,b));

console.log(cevre(2,3,4,5));
//#endregion




