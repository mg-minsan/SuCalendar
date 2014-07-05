
var monthName = ["Feb", "March", "Apr", "May", "Jun","Juy", "Aug", "Step", "Oct", "Nov", "Dec"];
var	weekName = ["Sun", "Mon", "Thu", "Wed", "Fri","Thu", "Sat"];
var	MaxDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var TOdate = new Date();
var FirstDay = new Date(TOdate.getFullYear(), TOdate.getMonth(), 1);
var getWeekNo = FirstDay.getDay(); 

window.onload = initFun();

function initFun(){
	setupCalendar();
	requestStatus();
	var cell = document.getElementsByClassName("contentCell");
	for(var i = 0; i < cell.length; i++){
		cell[i].onclick = sendStatus;
	}
}

 function setupCalendar(){
 	
 	var day = 1;
 	var contentCell = document.getElementsByClassName("contentCell");
 	
 	
 

 	for(var i = getWeekNo; i < MaxDay[TOdate.getMonth()]; i++ ){
 		contentCell[i].innerHTML = day;
 		day++;
 	}
 	}
 function requestStatus(){
 	requestSendStatus = createRequest();
 	if(request == null){
 			alert ("fails to create requestSendStatus");
 		}else{
 		url = "getStatus.php";
 		requestSendStatus.open("GET", url, true);
 		requestSendStatus.onreadystatechange = showStatus;
 		requestSendStatus.send(null);
 		}
 }

 	function showStatus(){
 		var cell = document.getElementById("contentCellWrapper").getElementsByTagName("div"); 		
	
 		if(requestSendStatus.readyState == 4){
			if(requestSendStatus.status == 200){
				var dateStatus = eval('(' + requestSendStatus.responseText + ')' );
				var countStatus = 0;
				var counter = 0;
				for(var i = getWeekNo; i < MaxDay[TOdate.getMonth()] ; i++ ){
					if(dateStatus.status[counter] == 1 ){
						cell[i].className = "doneCell";
					}
					else{

					}
					counter++;
				}
				/*for(var i = 0 ; i <= 8 ; i++){
					
					if(dateStatus.status[i] == 1){
						cell[counter].className = "doneCell";
					}else{
						cell[counter].className = "contentCell";
					}
					counter++;
					
				} */

			}
		}
	}
 	

 function sendStatus(){
 		requestSendStatus = createRequest();
 		if(request == null){
 			alert ("fails to create requestSendStatus");
 		}else{
 		DOMvalue = this;
 		var requestString = "year="+TOdate.getFullYear()+"&month="+TOdate.getMonth()+"&day="+this.innerHTML;
 		var url = "updateStatus.php?"+requestString;
 		requestSendStatus.open("GET", url, true);
 		requestSendStatus.onreadystatechange = changeStatus;
 		requestSendStatus.send(null);
 		}

 	}
function changeStatus(){
	if(requestSendStatus.readyState == 4){
		if(requestSendStatus.status == 200){
			
			if(requestSendStatus.responseText == "okay"){
				DOMvalue.className = "doneCell";
			}
		}
	}
}
