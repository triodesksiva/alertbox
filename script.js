function alertbox() {
 	 	var a = document.getElementById('alert').value;
     	alert(a)
     }

     function alertcall() {
        var a = document.getElementById('entervalue').value;
     	document.getElementById('view').innerHTML = a;
     }
     function arraynum() {
     	var array = ["1","2","6","12","22","56","89","16","27","28"];
     	var a = document.getElementById('valueenter').value;
     	if (array.indexOf(a)!=-1) {
                   document.getElementById('demo').innerHTML = true;
     	}
     	else
     	{
     		document.getElementById('demo').innerHTML = false;
     	}
     }
     // switch case for day example1
     var day;
	switch (new Date().getDay()) {
    	case 0:
        	day = "Sunday";
        	break;
    	case 1:
        	day = "Monday";
        	break;
    	case 2:
        	day = "Tuesday";
        	break;
    	case 3:
        	day = "Wednesday";
        	break;
    	case 4:
        	day = "Thursday";
        	break;
    	case 5:
        	day = "Friday";
        	break;
    	case  6:
        	day = "Saturday";
		}
		document.getElementById("days").innerHTML = "Today is " + day;
		// another switch case example2
		function cases(){
		var txt;
		var name = document.getElementById('getvalue').value;
		switch(name) {
			case "siva":
			txt = "siva is there";
			break;
			case "prakash":
			txt = "prakash is there";
			break;
			case "sathya":
			txt = "sathya is there";
			break;
			default:
			txt = "no match";
		  }
		  document.getElementById('result').innerHTML = txt;
	    }
	    // for loop control 
        function calc() {
            var arr = ["1","2","3","5","12","45","78","1","2","5","12","45","54","90","23","8","9"]
            var a = document.getElementById('numbers').value;
            var i;
            var txt = "";
            var len = arr.length;
            var num = 0;
            for(i = 0; i < len; i++) {
                if(arr[i] == arr.indexOf(a)) {
                    
                    num = num+1;
                }
                 document.getElementById('totalvalue').innerHTML = num;
            }
            
        }