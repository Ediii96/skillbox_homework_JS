'use strict';

function User(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = date;
}

function UserList(){
    this.users = [];
    this.add = function addUser(user){
        this.users.push(user);
    }
    this.all = function getAllUsers(){
        return this.users;
    } 
}

function getDateNow(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let regDate; 
    if(month < 10) month = '0' + month;
    if(day < 10) day = '0' + day;
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
    regDate = 'Пользователь зарегестрирован: ' + 
                day + '.' + month + '.' + year + '   ' + 
                hours + ':' + minutes + ':' + seconds;
    return regDate;
}

function main(){
    let regUsers;
    let userList = new UserList();
    let allUser = userList.all();
    do{
        regUsers = prompt(' Ведите имя и фамилию через пробел! ');
          if(regUsers !== null){
            regUsers = regUsers.trim();
            let nameUser = regUsers.split(' ');
            if(nameUser[1] !== undefined){
                let firstName = nameUser[0];
                let lastName = nameUser[1];
                let date = getDateNow();
                let user = new User(firstName, lastName, date);
                userList.add(user);    
            }
            else{
                alert(' Ведите имя и фамилию без пробелов!!! ');
            }  
        }
    }
    while (regUsers !== null);    

    for(let i=0; i < allUser.length; i++){
        let result = allUser[i].firstName + ' ' + allUser[i].lastName + '!!! ' + allUser[i].regDate;

        console.log(result);
    }

}

main();













// let date = new Date();
// let user = new User('Жопа', 'Жопная', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
// let userList = new UserList();
// console.log(user.firstName + ' ' + user.lastName + ' ' + user.regDate);
