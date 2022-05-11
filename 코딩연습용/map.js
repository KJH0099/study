

let arr = [ 4 , 68 , 47 , 33];


//forEach 

for(let i=0;i<arr.length;i++){
    console.log("for : " + arr[i]);
}

arr.forEach(function(e){
    console.log("forEach : " + e);
})


/**
 * for 이랑 forEach 는 작성법의 차이인가
 * 
 * 출력은 똑같이 됨
 * 
 */

// map 
const map = arr.map(function(e){
    
})

console.log("map : " + map);


//filter
const filter = arr.filter(function(e){
    
});

console.log("filter : " + map);
