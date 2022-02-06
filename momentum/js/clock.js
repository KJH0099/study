const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}
 // 함수 호출
getClock();
//1초 마다 getClock함수 실행
setInterval(getClock,1000);


