  var SampleObj = new Object();
  SampleObj.ObjectProperty1 = Property1Val;
  SampleObj.ObjectProperty2 = Property2Val;
  
  var AjaxCaller = new razax.zhr("/WebMethodName", "SuccessFunctionName");
  AjaxCaller.dopost(SampleObj);
  
  function SuccessFunctionName(ReturnValue){
    alert(ReturnValue);
  }
