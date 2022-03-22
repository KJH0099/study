//async & await

//1. async
async function fetchUser() {
     return 'name';
}

const user = fetchUser();

console.log(user);


//2. await 
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(2000);
    return 'banana';
}

//병렬적으로 수행해야하는 경우 아래와같이 코드를 작성x
async function pick() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
   return `${apple} + ${banana}`;
}

pick().then(console.log);

// 3. Promise APIs
function pickAll(){
    return Promise.all([getApple(),getBanana])
    .then(fruits => fruits.join(` + `));
}

pickAll().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);