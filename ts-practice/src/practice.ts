//const message : string = 'hello world';
// : string 으로 해당 상수값이 문자열이라는 것을 명시한다.
//console.log(message);

let count = 0 ;
count += 1;
count = "문자열" // error 

const msg : string = 'hello world'; //문자열

const number : number [] = [1,2,3];
const message : string[] = ['hello','world'];

message.push(1) // error 
/**
 * message 는 string 타입인데 숫자를 넣으려고 하면 에러 발생
 */

let mightBeUndefined : string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber : number | null = null; // number 일수도 있고 null 일수도 있음


let color :'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
color = 'green'; // error

// 미리 지정한 타입이 아닌값이 설정될때 에러 발생

function sum(x:number, y:number):number{
    return x+y;
}

sum(1,2);


function sumArray(numbers:number[]) : number {
    return number.reduce((acc,current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);
//? 뭔가 오류 났는데 ?? 



//인터페이스 생성
interface shape{
    getArea(): number; 
}

class Circle implements shape {
    //implements 키워드르르 사용하여 해당 클래스가 shpae interface의 조건을 충족하겠다는것을 명시 

    radius : number;

    //생성자 
    constructor(radius:number){
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}


class Rectangle implements shape {
    width: number;
    heigh : number;


    constructor(width:number, heith:number) {
        this.width = width;
        this.heigh = heith;
    }

    getArea(): number {
        return this.width *this.heigh;
    }

}


const shpae:Shape[] = [ new Circle(5), new Rectangle(10,5)];

shpae.forEach(shape => {
    console.log(shpae.getArea());
})


