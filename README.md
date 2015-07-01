# razaxjs
helping use JS

This project is intended to ease the use of common JS functionalities and minimize code.

MAKING AJAX POSTS :

Making Ajax Post With Argument(s):

-using with ASP.Net Example:
  var SampleObj = new Object();
  SampleObj.ObjectProperty1 = Property1Val;
  SampleObj.ObjectProperty2 = Property2Val;
  
  var AjaxCaller = new razax.zhr("PageName.aspx/WebMethodName", "CallBackFunctionName");
  AjaxCaller.dopost(SampleObj);
  
  function CallBackFunctionName(ReturnValue){
    //Perform action on return value
  }

-using with Bottle or any other frameworks:
  var SampleObj = new Object();
  SampleObj.ObjectProperty1 = Property1Val;
  SampleObj.ObjectProperty2 = Property2Val;
  
  var AjaxCaller = new razax.zhr("/WebMethodName", "CallBackFunctionName");
  AjaxCaller.dopost(SampleObj);
  
  function CallBackFunctionName(ReturnValue){
    //Perform action on return value
  }

Making Ajax Post Without Argument(s):

-using with ASP.Net Example:

  var AjaxCaller = new razax.zhr("PageName.aspx/WebMethodName", "CallBackFunctionName");
  AjaxCaller.dopost();
  
  function CallBackFunctionName(ReturnValue){
    //Perform action on return value
  }

-using with Bottle or any other frameworks:
  
  var AjaxCaller = new razax.zhr("/WebMethodName", "CallBackFunctionName");
  AjaxCaller.dopost();
  
  function CallBackFunctionName(ReturnValue){
    //Perform action on return value
  }
