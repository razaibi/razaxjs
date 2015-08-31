// The Ajax Call
  var AjaxCaller = rx.zhr("/WebMethodName","ShowResult").dopost();
// Call Ends Here
  
  function ShowResult(ReturnValue){
    alert(ReturnValue);
  }
