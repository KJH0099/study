
let crefe = {
"회사명" : "크레페",
"직원리스트" : [
    {
    "이름":"worker04",
    "연락처":"010-1234-5678",
    "나이":"31",
    "주소": {
        "우편번호" :  "03384",
        "주소" : "은평구",
        "상세주소" : "녹번동"
    }
   },
   {
    "이름":"worker05",
    "연락처":"010-1234-5678",
    "나이":"31",
    "주소":{
        "우편번호" :  "03152",
        "주소" : "종로구",
        "상세주소" : "수송동"
    }
   },
],
   
"직원수" : "5명",

 "신입직원" : [
    {
     "이름":"worker01",
     "연락처":"010-1234-5678",
     "나이":"25",
     "주소":{
         "우편번호" : "04750",
         "주소" : "성동구",
         "상세주소":"성수동"}
    },
    {
        "이름":"worker02",
        "연락처":"010-4444-5555",
        "나이":"22",
        "주소":{
        "우편번호" : "06750",
        "주소":"서초구",
        "상세주소":"서초동"}
    },
    {
        "이름":"worker03",
        "연락처":"010-7878-3232",
        "나이":"29",
        "주소":
        {"우편번호" :"07658",
        "주소":"강서구",
        "상세주소":"화곡동"}
    },
    ]

};

console.log(crefe); // 오브젝트 형식으로 출력 
console.log(JSON.stringify(crefe)); //전체 내용 그대로 출력
console.log("직원 주소 : "+ JSON.stringify(crefe.신입직원[0].주소));
console.log("직원리스트 : " + JSON.stringify(crefe.직원리스트[0]));


let crefest = JSON.stringify(crefe); // 데이터를 문자열화 
let obj = JSON.parse(crefest); // 문자열화 crefest 를 객체화 

console.log(crefest); 
console.log(obj);

/**
 * 직원은 찍으면 바로나오는데 직원 리스트는 stringfy 처리를 해줘야함 
 * 다시 해보니까 json 형태의 파일 안에서 배열로 json 형태의 파일들을 구성 -> 특정 내용만 보려면 가능 전체 내용은 object object로 출력됨 
 * 전체내용을 출력하려면 JSON.stringfy 처리 
 * 
 */



let test = ['123','456'];

console.log(test);
//(2) ['123', '456']


//1. unshift
test.unshift('789');// 앞에 새로운 배열 값 추가 
console.log("unshift : " +test);
//(3) ['789', '123', '456'] < 789 값이 앞으로 들어가있음 


// 2. pop  
test.pop(); // 배열의 마지막 요소를 제거한 후 제거한 요소를 반환 --> 삭제된 결과값을 돌려줌 
console.log(test); 
//(2) ['789', '123'] < 가장 뒤에있는 456 삭제됨 
console.log("pop : " +test.pop());
//123 < 789, 123 중에 마지막 값인 123만 가져옴 


// 3. push 
test.push('101112'); //배열 마지막에  추가
console.log(test);
//(2) ['789', '101112']

//4. shift
test.shift();  // 배열 맨앞에 값 제거 
console.log("shift : " +test);
//['101112'] < 789 삭제됨 


test = ['123','456','789','101112']; 
console.log(test);

//5. splice(시작점,끝점,item1,item2,...)
// test.splice(2,3,'a','b'); // 0번째에서 부터 1번째 삭제  
// console.log("splice : " + test);



//6. slice 
test.slice(0,1);
console.log("slice : " + test);


////////////////////////////////////////////////////////



