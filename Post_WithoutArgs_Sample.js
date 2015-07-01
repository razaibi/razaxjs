  var AjaxCaller = new razax.zhr("/WebMethodName", "ShowResult");
  AjaxCaller.dopost();
  
  function ShowResult(ReturnValue){
    alert(ReturnValue);
  }
