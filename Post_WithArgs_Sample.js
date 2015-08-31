  var SampleObj = new Object();
  SampleObj.ObjectProperty1 = Property1Val;
  SampleObj.ObjectProperty2 = Property2Val;
  
  var AjaxCaller = rx.zhr("/WebMethodName","ShowResult").dopost(SampleObj);
  
  function ShowResult(ReturnValue){
    alert(ReturnValue);
  }
