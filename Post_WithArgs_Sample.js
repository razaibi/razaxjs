  var SampleObj = new Object();
  SampleObj.ObjectProperty1 = Property1Val;
  SampleObj.ObjectProperty2 = Property2Val;
  
  // The Ajax Call
  var AjaxCaller = rx.zhr("/WebMethodName","ShowResult","POST").do(SampleObj);
  // Call Ends Here
  
  function ShowResult(ReturnValue){
    alert(ReturnValue);
  }
