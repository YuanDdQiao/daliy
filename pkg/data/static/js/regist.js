// 用户数据注册成功进入，否则alert("注册失败")
document.querySelector(".regist-button").onclick = function(){
    console.log("注册。。。。")
    addClass(document.querySelector(".regist"), "active")
    setTimeout(function(){
        addClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector(".regist").style.display = "none"
    },800)
    setTimeout(function(){
        removeClass(document.querySelector(".regist"), "active")
        removeClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector(".regist").style.display = "block"
        goLogin()
    },5000)
}
document.querySelector(".regist-center-input-code-get").onclick = function(){
    console.log("注册获取验证码。。。。")
}