// switch db name get
var swdbname             = null;
var nav_title_db         = null
// 用户数据检查成功进入，否则alert("登录失败")
document.querySelector(".connection-mysql").onclick = function(){
    addClass(document.querySelector("#connection-default"), "active")
    setTimeout(function(){
        addClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector("#connection-default").style.display = "none"
    },300)
    setTimeout(function(){
        // document.querySelector("#connection_default").style.display = "none"
        removeClass(document.querySelector("#connection-default"), "active")
        removeClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector("#connection-window").style.display = "block"
        document.querySelector("#mysql").style.display = "block"
    },1000)
    // alert("您将访问MySQL！")
    swdbname="MySQL"
}
$("#connection_form").on("submit", function(e) {
    e.preventDefault();
    var button = $(this).find("button.open-connection");
    $("#connection_error").hide();
    // button.prop("disabled", true).text("Please wait...");

    $("#connection-window").hide();
    $("#main").show();
    $("#nav").show();
    $("#sidebar").show();
    $("#body").show();
    $(".connection-sidebar-mini").show();
    $("#footer").hide();
    $("#connection-list-items").show();
    // 多个连接窗口,可相互切换
    nav_title_db="<div class='dbtitle active'>"+swdbname+"</div>"
    $(".connection-itmes-name div").removeClass("active");
    $(nav_title_db).appendTo(".connection-itmes-name");
});
$(".connection-itmes-name").on("click","div", function() {
    $(".connection-itmes-name div").removeClass("active");
    $(this).addClass("active");
});
$(".connection-group-switch button").on("click", function() {
    $(".connection-group-switch button").removeClass("active");
    $(this).addClass("active");

    switch($(this).attr("data")) {
      case "scheme":
        $(".connection-scheme-group").show();
        $(".connection-standard-group").hide();
        $(".connection-ssh-group").hide();
        $("#connection-window").css("height","600px")
        $("#connection-window").css("top","50%")
        return;
      case "standard":
        $(".connection-scheme-group").hide();
        $(".connection-standard-group").show();
        $(".connection-ssh-group").hide();
        $("#connection-window").css("height","600px")
        $("#connection-window").css("top","50%")
        return;
      case "ssh":
        $(".connection-scheme-group").hide();
        $(".connection-standard-group").show();
        $(".connection-ssh-group").show();
        $("#connection-window").css("height","780px")
        $("#connection-window").css("top","40%")
        return;
    }
});

document.querySelector(".connection-mongodb").onclick = function(){
    alert("不支持访问 mongodb ！")
}
document.querySelector(".connection-hbase").onclick = function(){
    alert("不支持访问 hbase ！")
}
document.querySelector(".connection-oracle").onclick = function(){
    alert("不支持访问 oracle ！")
}
document.querySelector(".connection-postgresql").onclick = function(){
    alert("不支持访问 postgresql ！")
}
document.querySelector(".connection-mmsql").onclick = function(){
    alert("不支持访问 mmsql ！")
}
