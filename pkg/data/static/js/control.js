$(document).ready(function(){
    $('.kontrol-tools-context').load('a.html');
    //单击 sync 链接，加载 sync.html
    $(".kontrol-tools-list .sync").click(function(){
        console.log("加载同步页面。")
        $('.kontrol-tools-context').load('a.html');
    });
    $(".kontrol-tools-list .back").click(function(){
        console.log("加载同步页面。")
        $('.kontrol-tools-context').load('b.html');
    });
    $(".kontrol-tools-list .recover").click(function(){
        console.log("加载同步页面。")
        $('.kontrol-tools-context').load('c.html');
    });
})
