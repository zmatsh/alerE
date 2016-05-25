/**
 * @author ZJX
 * @desc 自动生成Alert弹窗
 * @access 用法为 aler.alertError('提示文字！')
 * @arg text
 **/

var aler = {
	init:function(){
		/**装载背景层**/
		var bg=document.createElement("div");
			bg.id = "AlertShowbg";
			document.body.appendChild(bg);
		/**创建总DIV**/
		var showAlert=document.createElement("div");
		    showAlert.id = "showAlert";
		    /**创建TitleDiv**/
		var showHead=document.createElement("div");
			showHead.id = "showHead";
			showHead.innerText="提示信息";
			/**创建右上角X**/
		var closeWin=document.createElement("a");
			closeWin.id = "closeWin";
			closeWin.innerHTML="&nbsp;";
			/**创建提示信息Body**/
	    var showbody=document.createElement("div");
			showbody.id = "showbody";
			/**创建提示图标**/
			var imgloadding=document.createElement("div");
				imgloadding.id = "imgloadding";
			/**创建提示文字**/
			var textAler=document.createElement("div");
				textAler.id = "textAler";
				textAler.innerText="提示！！！！！！！！！！！！！";
			/**创建底部按钮**/
			var showbottom=document.createElement("div");
			    showbottom.id = "showbottom";
			    showbottom.innerText="确认";
		/**装载这个主div**/
		document.body.appendChild(showAlert);
		/*放置指定位置*/
		document.getElementById("showAlert").appendChild(showHead);
		document.getElementById("showHead").appendChild(closeWin);
		document.getElementById("showAlert").appendChild(showbody);
		
		document.getElementById("showbody").appendChild(imgloadding);
		document.getElementById("showbody").appendChild(textAler);
		document.getElementById("showAlert").appendChild(showbottom);
		$("#closeWin").addClass("closeWin");
		aler.closeAler();
	},
	alertError:function(textAler){
		var textIn = document.getElementById("textAler");
		textIn.innerText ="";
		textIn.innerText = textAler=!""&&textAler!=null?textAler:"错误提示信息";
		$("#imgloadding").removeClass();
		$("#imgloadding").addClass("messager-icon messager-error");
		document.getElementById("AlertShowbg").style.display ="block";
        document.getElementById("showAlert").style.display ="block";  
	},
	alertInfo:function(textAler){
		var textIn = document.getElementById("textAler");
		textIn.innerText ="";
		textIn.innerText = textAler=!""&&textAler!=null?textAler:"详情提示信息";
		$("#imgloadding").removeClass();
		$("#imgloadding").addClass("messager-icon messager-info");
		document.getElementById("AlertShowbg").style.display ="block";
        document.getElementById("showAlert").style.display ="block"; 		
	},
	alertWarning:function(textAler){
		var textIn = document.getElementById("textAler");
		textIn.innerText ="";
		textIn.innerText = textAler=!""&&textAler!=null?textAler:"警告提示信息";
		$("#imgloadding").removeClass();
		$("#imgloadding").addClass("messager-icon messager-warning");
		document.getElementById("AlertShowbg").style.display ="block";
        document.getElementById("showAlert").style.display ="block"; 		
	},
	alertQuestion:function(textAler){
		var textIn = document.getElementById("textAler");
		textIn.innerText ="";
		textIn.innerText = textAler=!""&&textAler!=null?textAler:"疑问提示信息";
		$("#imgloadding").removeClass();
		$("#imgloadding").addClass("messager-icon messager-question");
		document.getElementById("AlertShowbg").style.display ="block";
        document.getElementById("showAlert").style.display ="block"; 		
	},
	alertClose:function(){
		document.getElementById("showAlert").style.display ='none';  
        document.getElementById("AlertShowbg").style.display ='none';  
	},
	closeAler:function(){
		document.getElementById("showbottom").onclick=function(){
			aler.alertClose();
		}
		document.getElementById("closeWin").onclick=function(){
			aler.alertClose();
		}
	}
}
