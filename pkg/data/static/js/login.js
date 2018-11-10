// 用户数据检查成功进入，否则alert("登录失败")
document.querySelector(".login-button").onclick = function(){
    console.log("登录。。。。")
    addClass(document.querySelector(".login"), "active")
    setTimeout(function(){
        addClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector(".login").style.display = "none"
    },800)
    setTimeout(function(){
        removeClass(document.querySelector(".login"), "active")
        removeClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector(".login").style.display = "block"
        goHome()
    },5000)
}
document.querySelector(".login-center-input-code-get").onclick = function(){
    console.log("登录获取验证码。。。。")
}