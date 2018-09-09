function myFunction() {
	if (document.getElementById("subscribe").innerHTML == 'Thank You For Subscribing!') {
		console.log("Already subscribed")
	} 
  	if (document.getElementById("subscribe").innerHTML == 'Subscribe!') {
  		document.getElementById("subscribe").innerHTML = 'Thank You For Subscribing!';
  		document.getElementById("textbox").value = ""
  		document.getElementById("textbox2").value = ""

  		var d = new Date()
  		console.log("Subscription made at " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
  	}
}

function sryof() {
  alert('Sorry, we currently only offer free templates.')
}