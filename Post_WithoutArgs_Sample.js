// The Ajax Call
  var AjaxCaller = rx.zhr("/WebMethodName","ShowResult","POST").do();
// Call Ends Here
  
  function ShowResult(ReturnValue){
    alert(ReturnValue);
  }
