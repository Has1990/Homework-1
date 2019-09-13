//Task 1

function isPrime(n) {

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

}

console.log(isPrime(63));


//Task 2 (Missed)


//Task 3

function arraySum(arr1, arr2) {
    let total;
    let sum1;
    let sum2;
    for (let i = 0; i < arr1.length; i++) {
        sum1 = arr1.reduce((a, b) => a + b, 0);
        console.log(sum1);
    }

    for (let i = 0; i <= arr2.length; i++) {
        sum2 = arr2.reduce((a, b) => a + b, 0);
        console.log(sum2);
    }

    total = sum1 + sum2;
    console.log(total);
}

arraySum([1, 2, 3], [4, 5, 6]);

//Task 4

function squarePattern(n) {
    let arr = [];
    let space = " ";
    let pathChar = "*";
    let line = "";
    for (let i = 0; i <= n; i++) {
        line += pathChar + space;
    }

    for (let j = 0; j <= n - 2; j++) {
        let row = "";
        for (let i = 0; i <= 2 * n; i++) {
            if (i === j - j || i === 2 * n) {
                row += pathChar;
            } else {
                row += space;
            }

        }
        arr.push(row)
    }

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + '\n';
    }

    console.log(line+str+line);


}

squarePattern(5);

//Task 5

function moveChar(str){
    let x = str.split("");
    let y = [];
    for(let i = 0;i < str.length; i +=3){
        if(x[i+2]){
            y.push(x[i+1]);
            y.push(x[i+2]);
            y.push(x[i]);

        }else{
            y.push(x.slice(i))
        }

    }let a = y.join(" ")
    console.log(a)
}

moveChar('123456789');


//Task 6

function numPattern(n){
    let str = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if(i >= j ){
                str = str.concat("1");
            }
        }
        str = str.concat("\n")
    }
    console.log(str)
}
numPattern(5);


////////////////////////////////////////////////


function numbersPattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n; k++) {

        }
        for (let j = i; j <= n; j++) {
            str += j;
            str = str.concat("\t")
        }
        console.log(str);
        str = "";
    }
}

numbersPattern(5);
