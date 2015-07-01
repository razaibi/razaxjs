  var SampleObj = new Object();
  SampleObj.ObjectProperty1 = Property1Val;
  SampleObj.ObjectProperty2 = Property2Val;
  
  var AjaxCaller = new razax.zhr("/WebMethodName", "ShowResult");
  AjaxCaller.dopost(SampleObj);
  
  function ShowResult(ReturnValue){
    alert(ReturnValue);
  }
