// 일반객체를 interface 타입으로 설정하기 


interface Person {
    name:string;
    age?:number; // 물음표가 들어간경우, 설정을 해도되고 안해도 되는 값을 의미
}

interface Developer extends Person {  //Person 상속 
    // name:string;
    // age?:number;
    //name이랑 age는 정의 안해줘도 되지 않나...
    skills:string[];
}

const person : Person = {
    name:'김사람',
    age: 20
};

const expert : Developer = {
    name : '김개발',
    skills:['javascript','react']
};

const people : Person[] = [person,expert];

