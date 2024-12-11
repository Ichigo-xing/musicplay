function fnLogin() {

    var oUname = document.getElementById("uname")
    var oUpass = document.getElementById("upass")
    var isError = true;

    if (oUname.value.length > 20 || oUname.value.length < 6) {
        oError.innerHTML = "用户名请输入6-20位字符";
        isError = false;
        return "请输入正确的用户名";
    }
    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
        oError.innerHTML = "密码请输入6-20位字符"
        isError = false;
        return "请输入正确的密码";
       }
    window.alert("登陆成功！");
   }
function fnRegist(){
    var uname = document.getElementById("uname")
    var upass = document.getElementById("upass")
    var userInfo = {
        oUname: uname,
        oUpass: upass
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert("注册成功！");
};

function displayUserInfo() {
    var savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
        var userInfo = JSON.parse(savedUserInfo);
        console.log('已保存的用户信息:', userInfo);
    } else {
        console.log('没有保存的用户信息');
    }
}