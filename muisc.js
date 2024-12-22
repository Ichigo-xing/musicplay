function login() {
    var use = document.getElementById('useLog').value;
    var pwd = document.getElementById('pwdLog').value;
    var cbx = document.getElementById('cbx');
    let dateUse = localStorage.getItem(use);
    console.log(use)
    console.log(dateUse);
    var dateObj = JSON.parse(dateUse);
    console.log(dateObj);
    if (use == dateObj.username && pwd == dateObj.password) {
        alert('登陆成功');
        location.href = src="../music-player/index.html";

    } else {
        alert('用户名或者密码错误')
    }
}
function regist() {
    var username = document.getElementById('use').value;
    var password = document.getElementById('pwd').value;
    console.log(username);
    Date(username, password);
    console.log(username);
}
function Date(username, password) {
    console.log(username);
    
    if (username === '' || password === '') {
        alert('请先输入用户名和密码');
    }
    else if (pwd.value != pwd2.value) {
        alert('两次输入密码不一样 请重新输入');
    } else {
        localStorage.setItem(username, JSON.stringify({
            username,
            password,
            tag: false
        }))
        let datashi = localStorage.getItem(username);
        console.log(datashi);
        alert('注册成功 ! ! !')
    }

}
function myFunction(){
    var element = document.querySelector('.header');
    if (element) {
        element.classList.remove('header');

        element.classList.add('hidden1');
    }

    var element1 = document.querySelector('.hidden');
    if (element1) {
        element1.classList.remove('hidden');

        element1.classList.add('headline');
    }
   }
function myFunction2(){
    var element = document.querySelector('.headline');
    if (element) {
        element.classList.remove('headline');

        element.classList.add('hidden');
    }
  var element = document.querySelector('.hidden1');
    if (element) {
        element.classList.remove('hidden1');

        element.classList.add('header');
    }
 }
