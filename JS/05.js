'use strict';
// class : 템플릿 (데이터없음)
// object : class + data 

//1. 클래스선언 
class person{
    constructor(name,age){
        //fileds
        this.name = name;
        this.age = age;
    }

    //methods
    speack(){
        console.log(`${this.name}:Hi`);
        //              생성된 오브젝트의 
    }
}

const el = new person ('el',30);
console.log(el.name);
console.log(el.age);
el.speack();

//2. Getter and Setters 

class user {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //age 를 정의하는 순간 getter를 호출함 
    get age(){
        return this._age;
    }

    // 메모리의 값을 업데이트 하는 것이 아니라 setter를 호출 
    set age(value) {
        this._age = value;
    }
    const user1 = new user('ppoo','oopp',-2);
    console.log(user1.age);

}

//Fileds (public,private)
class Ex{
    publicField =2 ;
    #privateField = 0;
} 

const Ex = new Ex();

// 4. Static properies and methods 
class article{
    static publisher = 'qq';
    constructor(articleNo){
        this.articleNo = articleNo;
    }

    static printPublisher(){
        console.log(article.publisher);
    }
}

// inheritance 
class shpae {
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        super.draw();
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width = this.height;

    }
}

class Re extends shpae{}
class Tiragle extends shpae{
    //이미 정의된 함수를 재정의해서 사용 -> 오버라이딩 

}
const  re = new re (20,20,'blue');
re.draw();
console.log(re.getArea());


//6,  instanceof -> true / false 
console.log(re instanceof re); 


