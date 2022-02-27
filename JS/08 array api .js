
//1) join : 배열에 있는 모든값을 String 으로 리턴
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join('|');  
    //구분자를 넣어도 되고 안넣어도됨 
    //구분자를 넣으면 ex) , -> | 로 변현가능
    console.log(result); 
}

//2. String을 배열로 만들기 / split
{
    const f1 = 'f1,f2,f3,f4';
    const result = f1.split(',',2);
    // (구분자,출력하려는갯수) 
    //구분자 필수
    console.log(result);
}

//3. 거꾸로 배열하기  reverse
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 배열자체도 순서가 바뀌어서 출력된다.
    //[5, 4, 3, 2, 1]
    //배열자체를 변환시키고 변환시킨값을 리턴한다

}   

//4. 특정요소를 제외한 새로운 배열만들기 splice
{
    const array =[1,2,3,4,5];

    //1) splice
    /*
    const result = array.splice(0,2);
    splice는 배열 자체를 수정한다. (시작점,끝점)
   console.log(result);
    //(2) [1, 2]
    console.log(array);
   // (3) [3, 4, 5]*/

    //2)slice
    console.clear();
    const result2 = array.slice(0,2);
    //slice는 배열의 특정한 부분을 리턴함 (시작,끝) 
    //마지막 index는 제외된다 -> 0번 1번만 리턴됨 
    console.log(result2);
    console.log(array); // 배열자체가 수정되지 않았음을 알 수 있다.
}


class Student{
    constructor(name, age,enrolled,score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',29,true,45),
    new Student('B',22,false,88),
    new Student('C',26,true,90),
    new Student('D',49,false,99),
]

//5.90인 학생 찾기 find
{//find는 콜백함수를 만들어서 전달해야함
  /*  const result = students.find(function(studunt,index){
        return studunt.score === 90;
        // 배열에 있는 값을 하나하나 가져와서 return이 true가 되면
        // true 를 리턴한다.
    });
    console.log(result);
   */
    const result = students.find((student) => student.score === 90 );
    console.log(result); 
}

// 6. 수업에 등록한 학생만 출력하기  -  filter
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}


//7. 점수만 있는 새로운 배열 만들기 - map
{
    const result = students.map((student) => student.score );
    //배열안에 들어있는 요소를 다른 콜백함수를 호출하여 리턴되어진 값으로 대체 
    //다른방식으로 데이터를 사용해야할때 //데이터 가공
    //콜백함수로 전달하는 인자는 최대한 이해하기 쉽게 작성
    console.log(result);
}


// 8. 학생중에 50점보다 낮은 학생 여부 확인 - some
{
    const result = students.some((student) => student.score < 50);
    console.log(result); //ture

    //every는 배열의 모든 요소들이 조건을 충족해야지만 리턴된다
    const result2 = students.every((student) => student.score < 50);
    console.log(result2); //false

}

// 9. 평균값 구하기 - reduce
{
    //배열의 있는 모든 요소를 누적하여 전달해야한다. 
    // 사용자가 원하는 시작점부터 어떤값을 누적할때 사용
    const result = students.reduce((prev,curr) => {
        //prev : 이전에 리턴된 값이 전달되어서 오고 
        //curr : 배열에 아이템을 순차적으로 전달 받는다.
       console.log(prev);
       console.log(curr);
       return prev + curr.score;
    },0);
    console.log(result);

    const result2 = students.reduce((prev,curr) => prev + curr.score,0);
    console.log(result2/students.length);
    // reduceRight
}
console.clear();
//10. 학생들의 모든 점수를 String 으로 변환하는것
{
    const result = students
    .map(student => student.score) //map으로 점수만 배열로 만듬
    .filter(score => score >= 50) // filter로 조건
    .join(); // 배열에 있는 값을 String으로 리턴
    
    console.log(result);
}

//11. 낮은순으로 String 변환
{
    const result = students
    .map(student => student.score)
    .sort((a,b) => a - b ) 
    //이전값과 현재값을 전달 
    // 큰값부터 할려면 반대로  .sort((a,b) => b - a ) 
    .join();

    console.log(result);
    
}