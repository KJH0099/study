
// 클래스는 연관있는 데이터를 묶어 놓은 것 속성(field) 행동 (method)를 묶어 놓은것 
// 필드만 있는경우 데이터 클래스라고 부른다.

// class 자체에는 데이터가 들어가있지 않다. 정의만 한거라서 실제로 메모리에 안 올라감
// class + data = object 
// Object 
// 오브젝트는 키와 밸류의 집합체
const obj1 = {};            //object literal 형식
const obj2 = new Object();  //objrect constructor 형식 
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ee = {name :'ee',age:33};

//프로펄티 
ee.hasjob =true;

// 2. computed properties 
//property 는 String 으로 해야한다.
console.log(ee.name);
console.log(ee['name']);
ee['hasJob'] = true;
console.log(ee.hasJob);


function printValue(obj,key){
    console.log(obj[key])
}

printValue(ee,'name');

// 3. shorthand
const person1 = {name:'aa',age:22};
const person2 = {name:'bb',age:33};
const person3 = {name:'cc',age:44};
const person4 = new Person('dd',55);

//4. Contructor function 
function Person(name,age){
   this.name = name;
   this.age = age;
}

//5.키가 있는지 없는지 확인 
console.log('name' in ee);
console.log('random' in ee);

//6. for..in  for..of
//for in 
for(key in ee) { // ee가 가지고 있는 키가 블럭을 돌때마다 안의 내용을 수행
    console.log(key);

}

//for of
const array = [1,2,4,5]; 

for (let i=0;i<array.length;i++){
    console.log(i);
}


for(value of array){
    console.log(value);
}
//똑같이 출력하고 있지만 아래의 코드가 더 깔끔하다.


//7. cloning
//assign
const user = {name:'pp',age:30};
const user2 = user;

user2.name = 'coder';
console.log(user);

// old way 
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4,user);
console.log(user4);

//다른 예시
const f1 = {color:'red'};
const f2 = {color:'blue', size :'big'};
const mixed = Object.assign({},f1,f2);
console.log(mixed.color);
console.log(mixed.size);