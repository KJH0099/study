 //JSON 

 //1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);


const rb = {
    name : 'pp',
    color : 'white',
    size : 'null',
    birthDate : new Date(),
    Symbol : Symbol('id'), // symbol은 포함되지 않는다.
    jump : () => {
        console.log(`${name} jump`);
    },
};

//1)
json = JSON.stringify(rb,['name','color']);
// [] 안에 원하는 프로펄티만 적으면 해당 내용만 나온다
console.log(json);

//2) 콜백함수를 써서 세밀하게 통제할수있다.
json = JSON.stringify(rb,(key,value) =>{
    console.log(`key:${key}, value:${value}`);
    return key ==='name'?'il':value;
});
console.log(json);


 //2. Json to Object
 //parse(json)
console.clear();
json = JSON.stringify(rb);
const obj = JSON.parse(json,(key,value) =>{
    console.log(`key:${key}, value:${value}`);
    return key ==='birthDate' ? new Date(value) : value ;
});
console.log(obj);
rb.jump();
//obj.jump();

console.log(rb.birthDate.getDate());
console.log(obj.birthDate); //error