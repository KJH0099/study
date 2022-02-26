'use strict';

//array
// 1. 배열선언
const arr1 = new Array();
const arr2 = [1,2];

//2. Index 
const f1 = ['apple','banana'];
console.log(f1);
console.log(f1.length);
console.log(f1[0]);  //apple
console.log(f1[1]);  //banana
console.log(f1[2]);  //undefine
console.log(f1[f1.length - 1]); //가장 마지막 인덱스

//3. looping 
console.clear();

//a. for 사용
for (let i=0;i<f1.length;i++){
    console.log(f1[i]);
}

//b. for of
for(let fru of f1) {
    console.log(fru);
}

//c. forEach 콜백함수를 받아옴 
f1.forEach((f1) => console.log(f1));

//4. 추가,삭제,복사
//추가 push()
f1.push('peach','grape');
console.log(f1);

//삭제 pop()
f1.pop();
console.log(f1);
f1.pop();
console.log(f1);

// unshift 
f1.unshift('peach');
console.log(f1);

//shift
f1.shift('peach');
console.log(f1);


// shift와 unshiftsms pop이나 push 보다 느리다. 
// 배열전체를 밀고당기기 때문에 느려짐

//삭제 
//splice 
f1.push('f4','f5','f6');
console.log(f1);

f1.splice(1,1); //splice(어디에서부터,몇개를)
console.log(f1);
f1.splice(1,1,'f7'); //삭제한후 삭제한 곳에 데이터를 추가할 수 있음
console.log(f1);

//combine 배열을 붙일수 있다. 
const f2 = ['ff1','ff2','ff3'];
const newFruits = f1.concat(f2);
console.log(newFruits);


//5. rjator
console.clear();
console.log(f1);
console.log(f1.indexOf('apple')); //0
console.log(f1.indexOf('fine')); //-1
console.log(f1.includes('apple')); //true
console.log(f1.includes('fine')); //flase


//lastIndexof 
console.clear();
f1.push('apple');
console.log(f1);
console.log(f1.indexOf('apple'));
console.log(f1.lastindexOf('apple'));
