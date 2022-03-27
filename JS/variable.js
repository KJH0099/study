
//1. use strict
//ES5 부터 ES6는 기본 
'use strict'


//2. Variable,rw(read/write)
//재할당이 가능함 , 메모리에 읽고 쓰기가 가능 
//let  - ES6
let Name = 'Name';
{
    let name2 ='ad';
    console.log(name2);
    name2 = 'hello';
    console.log(name2);
    console.log(Name);
}


//. var 사용권장안함 no block scope
//3. Constant - read Only 읽기만 가능 
/*
 * constans 
값이 변경되지 않는 Immutable 데이터타입
값을 변경하지 않는 이유 
- security
보안상의 이유
-tread safety
다양한 스레드 들이 동시에 변수에 접근해서 값을 변경한다는 
동시에 변경하는 건 위험함  
-reduce human mistake 
실수를 줄일 수 있음
 */

// Immutable data types : premitive tpes, frozen object (데이터수정불가)
// Mutable data types : all object (JS 모든 오브젝트는 기본적으로 변경 가능)

//4. variable type
// primitive(), single item : Number, String , boolean , null , undefined,Symbol
// object, box CredentialsContainer 
// 오브젝트는 너무 커서 한번에 저장 x 레퍼런스를 통해서 실제로 담겨있는 곳을 가리킴
// funtion first-class function 


///5. Dynmic Typing 
let text='hello';
console.log(text.charAt(0)); 
console.log(`valud:${text},type:${typeof text}`);
text=1; 
console.log(`valud:${text},type:${typeof text}`);

text ='7' + 5 ;
console.log(`valud:${text},type:${typeof text}`);
//문자열에 +있는 경우 숫자 5를 String type 으로 변경하여 ->75가 출력

text = '8' / '2';
console.log(`valud:${text},type:${typeof text}`);

//타입스크립트 = 자바스크립트 + 타입 