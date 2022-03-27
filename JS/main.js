/*
//number, string, boolean, null, undefined 
let number = 2;
let number2 = number;

 console.log(number);
 console.log(number2);

 number2 = 3;

 console.log(number);
 console.log(number2);

 // object는 다르다 
 const obj = {
     name : 'aa',
     age : 33,
 };


 obj = {
    name : 'dd',
 }
console.log(obj); 

// fasle  : 0 , -0 , '' , null , undefined 
// true   : -1 , 'hello' , [] (빈 배열) 

let num = 0 ; // 선언하고 값을 할당하지 않는다면 -> undefined
if(num){
    console.log('true');
}else { 
    console.log('false');
}

num && console.log(num); 
*/
// class 
class Counter {
    constructor(){
        this.counter = 0; 
        
    }

    //클래스에서 함수를 선언할때는 function을 작성하지 않아도 ok 
    increase(run){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 == 0){
           run(this.counter); // 콜백함수
        }
    }
}

const coolCounter = new Counter();
function print(num){
    console.log(`pp ${num}`);
}

function alert(num){
    alert(`alert ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();