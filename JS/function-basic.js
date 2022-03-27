

//함수 선언
function Something(add){
    console.log(add);
    const result = add(2,3);
    console.log(result);
}


function add(a ,b) {
    const sum = a + b;
    return sum;
}

//함수 호출
Something(add()); 

const result = add(1,2);
console.log(result);
