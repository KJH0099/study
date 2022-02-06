const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting  = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const link = document.querySelector("a");

//로그인 했을때 실행 
function LoginSubmit(event){
   event.preventDefault(); // 이벤트가 실행되지 않는다.  브라우저 기본동작을 멈추고 아래의 내용을 실행
   const username = loginInput.value; // 입력받은 id
   localStorage.setItem(USERNAME_KEY,username); //로컬스토지에 저장
   paintGreeting(username);
   // greeting.innerText = "Hello " + username;
   
}


function paintGreeting(username){
   greeting.innerText = `Hello ${username} `;
    // ! 옆에 `` 사용 홀따옴표아님
   // String 이랑 변수를 합치고, 변수를 String 안에 포함 , 뒤에 추가적으로 작성 가능
   greeting.classList.remove(HIDDEN_CLASSNAME);   
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ 
 //LocalStorage에 저장된 값이 없을 때
 loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden class 제거
 loginForm.addEventListener("submit",LoginSubmit);
} else {
 // LocalStorage에 저장된 값이 있을 때
paintGreeting(savedUsername);
}