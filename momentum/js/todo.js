const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//const todeInput = document.getElementByid("#todo-form input"); 같은거임 
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//todo를 저장하기 위한 배열선언
let toDos =[];

//todo 저장함수 localStorage에 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSNO.Stringify()는 javascript 오브젝트나 array또는 어떤 js 코드건 간에 문자로 바꿔준다.
}


//todo 제거 함수
function delTodo(e){
  const li = e.target.parentElement;
  //parentElement는 클릭 된 element의 부모이다.
  li.remove();
  //target -> button / button의 부모 -> li 
  //li.remove()는 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //로컬데이터 삭제 실행 toDo.id는 String 값이므로 parseInt로 number변경 후 삭제
  saveToDos();
  //삭제후 남아있는 데이터 다시 불러오기
  
/*
만약 새 array에서 오브젝트를 유지하려면
Filter 함수는 반드시 true를 리턴해야한다
*/

};

//todo 생성함수 화면에 보여짐
function paintTodo(newTodo){
  const li = document.createElement("li");
  //createElement 안에 li로 넣어줘야함 
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click",delTodo); 
  //버튼 클릭 시 , delTodo 함수 실행
  li.appendChild(span); 
  li.appendChild(button);
  // li 내부에 포함 appendChild  
  todoList.appendChild(li);
}

//입력값을 생성함수에 전달하는 함수
function TodoSubmit(e) {
 e.preventDefault(); 
 const newTodo = todoInput.value; //input의 value를 새로운 변수에 복사한 것 
 todoInput.value = ""; // 입력창 비우기 
 const newTodoObj = {
   text:newTodo,
   id : Date.now(),
 };
 toDos.push(newTodoObj);  // 사용자가 입력한 텍스트를(newTodo) toDos array에 push
 paintTodo(newTodoObj);  // paintTodo함수로 보내서 화면에 띄움
 saveToDos();         // saveTodo함수로 local에 저장
}

todoForm.addEventListener("submit",TodoSubmit);

//localStorage 에는 text만 저장 할 수 있다. -> Array를 저장x 
const savedToDos = localStorage.getItem(TODOS_KEY);

// 저장된 값이 있을 경우 
if(savedToDos !== null){
 const parsedToDos = JSON.parse(savedToDos);
 toDos = parsedToDos;
 parsedToDos.forEach(paintTodo); 
}


