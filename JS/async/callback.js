'use strict'; 

// 1. 동기와 비동기 
// 자바스크립트는 -> 동기적임 
//hoisting: var , function declaration 선언들이 제일 위로 올라가는것

console.log('1');

//synchronous 는 정해진 순서에 맞게 코드가 실행되는것 
// 비동기적으로 언제 코드가 실행될지 예측할수 없는 것. 

setTimeout(() =>console.log('2'), 1000);
console.log('3');


//synchronous callback
function printIM(print){
    print();
}

printIM(()=>console.log('hi'));

//Asynchronous callback
function printDe(print,timeout){
    setTimeout(print,timeout);
}

printDe(() => console.log('async callback',2000));

//callback example
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=> {
            if (
                (id ==='a' && password ==='aa')||
                (id ==='b' && password ==='bb')
            ) {
                onSuccess(id);
            } else {
                onError(new Error ('not found'));
            }
        },2000);
    }

    getRoles(user,onSuccess,onError){
        setTimeout(() => {
            if (user === 'aa') {
                onSuccess({ name:'aa', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        })
    }
}

const UserStorage = new UserStorage(); 
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${user.name}, you have a ${user.role}`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}

);

//가독성이 떨어짐 어디서 어디에 연결되어있는지 확인하기 어려움 