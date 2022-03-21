'use strict';

/**
비동기적인 것을 수행할때 콜백함수대신 수행할수 있음 
두가지만 잡고 공부하면 ok 
1. state
2. producer(정보제공)와 consumer(정보소비) 를 구분하는것 

-state : pending -> fulfilled or rejected 
-Producer vs Consumer 

새로운 프로미스가 생성될때는 excutor 라는 함수가 자동을 실행된다. 

 */
// 1. producer 
// promise는 클래스 이기 때문에 new 

const promise = new Promise((resolve,reject) => {
 //네트워크에서 데이터를 받아오거나],파일에서 큰파일을 읽는 건 시간이 걸린다.
// 비동기적 으로 처리하는게 좋다. 
console.log('doing something');
setTimeout(() => {
   // resolve('success')
    reject(new Error('no newtsork'));
    //Error 도 오브젝트 
} , 2000);

});

// 2. Consumers : then, catch, finally 
promise 
.then(value => { //똑같은 promise를 호출 
    console.log(value);
})
.catch(error => { // 실패한경우 
    console.log(error);
})
.finally(() => { // 성공 실패에 상관없이 무조건 호출됨
    console.log('finally');
}) 

// 3. Promise Chaining 
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1),1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(num-1),1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling 
const getHen = () =>
 new Promise((resolve,reject) => {
     setTimeout(() => resolve(`hen`),1000);
 });
 const getEgg = hen => 
  new Promise((resolve,reject) => {
      setTimeout(() => resolve(`${hen} => egg`),1000)
  });
  const cook = egg => 
   new Promise((resolve,reject) => {
       setTimeout(() => resolve(`${egg} => a`),1000);
   });

   getHen() //
   .then(getEgg)
   .catch(error => {  // catch로 에러처리 
       return 'bread';
   })
   .then(cook)
   .then(console.log)
   .catch(console.log);

  