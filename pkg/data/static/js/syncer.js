// 1:var options=$(“#select option:selected”); //获取选中的项

// 2:alert(options.val()); //拿到选中项的值

// 3:alert(options.text()); //拿到选中项的文本

// 4:alert(options.attr('url')); //拿到选中项的url值

// 数据同步选择单库还是所有库同步全局变量 开始
var dbleftswitch=null
var dbselect=null
var dbselecttype=""

// 数据同步选择单库还是所有库同步全局变量 结束

function showNotice() {
  Notification.requestPermission().then(function(permission) {  
      // default ：不知道用户的选择，默认。
      // granted ：用户允许。
      // denied ：用户拒绝。
      if (permission == "granted") {  
        alert("您接受了消息通知！")
        var notification = new Notification("消息提醒:", {  
          body: '你的朋友圈有3条新状态，快去查看吧',
          tag: '小明',
          icon: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg',
          requireInteraction: true
        });  
        setTimeout(function() {
          notification.close();
        }, 30000);
      }else if(permission === 'denied'){
        alert("您已拒绝消息通知！")
      }else if(permission === 'denied'){
        alert("您没有选择消息通知！")
      }
  })  

}
$(".connection-group-switch-left button").on("click", function() {
    $(".connection-group-switch-left button").removeClass("active");
    $(this).addClass("active");

    switch($(this).attr("data")) {
      case "scheme":
        $(".connection-scheme-group-left").show();
        $(".connection-standard-group-left").hide();
        $(".connection-ssh-group-left").hide();
        $("#connection-window-left").css("height","500px")
        $("#connection-window-left").css("top","46%")
        return;
      case "standard":
        $(".connection-scheme-group-left").hide();
        $(".connection-standard-group-left").show();
        $(".connection-ssh-group-left").hide();
        $("#connection-window-left").css("height","500px")
        $("#connection-window-left").css("top","46%")
        return;
      case "ssh":
        $(".connection-scheme-group-left").hide();
        $(".connection-standard-group-left").show();
        $(".connection-ssh-group-left").show();
        $("#connection-window-left").css("height","780px")
        $("#connection-window-left").css("top","20%")
        return;
    }
});
$(".connection-group-switch-right button").on("click", function() {
  $(".connection-group-switch-right button").removeClass("active");
  $(this).addClass("active");

  switch($(this).attr("data")) {
    case "scheme":
      $(".connection-scheme-group-right").show();
      $(".connection-standard-group-right").hide();
      $(".connection-ssh-group-right").hide();
      $("#connection-window-right").css("height","500px")
      $("#connection-window-right").css("top","46%")
      return;
    case "standard":
      $(".connection-scheme-group-right").hide();
      $(".connection-standard-group-right").show();
      $(".connection-ssh-group-right").hide();
      $("#connection-window-right").css("height","500px")
      $("#connection-window-right").css("top","46%")
      return;
    case "ssh":
      $(".connection-scheme-group-right").hide();
      $(".connection-standard-group-right").show();
      $(".connection-ssh-group-right").show();
      $("#connection-window-right").css("height","780px")
      $("#connection-window-right").css("top","20%")
      return;
  }
});
$("#connection-window-middle .next-step").on("click",function(){
  dbselect=$("#connection-save-left").children('option:selected')

  if (dbselect.val()=="nothing") {
    
    alert("请选择 数据源 的数据库...")
  } else if($("#connection-save-right").children('option:selected').val()=="nothing" && $("#connection-save-left").children('option:selected').text()!="*.*"){
    alert("请选择 目标 数据库...")
  }else{
    $("#connection-window-left").hide();
    $("#connection-window-right").hide();
    $(".syncer-title").hide();
    
    $(".syncer-type").show();
    $("#connection-window-middle").hide();
    $("#connection-window-middle-2").show()
  }
});
$("#connection-window-middle-2 .next-step").on("click",function(){
  if (dbselecttype=="") {
    alert("请选择要执行的选项")
  } else {
    // console.log(dbselecttype)
    $(".syncer-type").hide();
    $("#connection-window-middle").hide();
    $("#connection-window-middle-2").hide()
    $("#connection-window-middle-3").show()
    $(".syncer-list-all").show()
    // 数据同步选择单库还是所有库同步全局变量
    if(dbselect.text() == "*.*"){
      dbleftswitch="all"
      // console.log("同步所有库")
    }else{
      // console.log("同步单库")
      dbleftswitch=null
    }
    if (dbleftswitch=="all") {
      $(".syncer-list-single").hide()
      $(".syncer-list-dbs").show()
    } else {
      $(".syncer-list-dbs").hide()
      $(".syncer-list-single").show()
    }

  }

});
$("#connection-window-middle-2 .up-step").on("click",function(){  
  $(".syncer-type").hide();
  $("#connection-window-middle-2").hide();
  $("#connection-window-middle").show()
  $("#connection-window-left").show();
  $("#connection-window-right").show();
  $(".syncer-title").show();

});
$("#connection-window-middle-3 .up-step").on("click",function(){  
  $(".syncer-list-all").hide()
  $(".syncer-type").show();
  $("#connection-window-middle-2").show();
  $("#connection-window-middle-3").hide()
});
// 如果当数据源选择了所有库，那么目标库就不需要有数据库选择项目了
$("#connection-save-left").on("change",function(){
  dbselect=$(this).children('option:selected')
  if (dbselect.text()=="*.*") {
    $("#connection-save-right").prop("disabled","true")
  } else {
    $("#connection-save-right").prop("disabled","")
  }
});
// onclick=this.checked=false
// 单选和复选框配合
$("#dubble").on("click",function(){
  $("#checkbox").attr("disabled",true); 
  dbselecttype="dubble"
});
$("#view").on("click",function(){
  $("#checkbox").attr("disabled",true); 
  dbselecttype="view"
});
$("#single").on("click",function(){
  $("#checkbox").attr("disabled",false); 
  dbselecttype="single"
});
