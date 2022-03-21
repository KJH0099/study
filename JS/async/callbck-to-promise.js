 //5. callback to peo

   //callback example
   class UserStorage{
    loginUser(id,password){
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if (
                    (id ==='aa' && password ==='aa')||
                    (id ==='b' && password ==='bb')
                ) {
                    resolve(id);
                } else {
                    reject(new Error ('not found'));
                }
            },2000);
        }); 
    }

    getRoles(user){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (user === 'aa') {
                    resolve({ name:'aa', role : 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            })
        });
      }
   }
const userStorage = new UserStorage(); 
const id = prompt('enter your id');
const password = prompt('enter your password');

//promise
userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(
    `Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);


//callback
/*
UserStorage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${user.name}, you have a ${user.role}`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}

);*/