$(function () {
	setInterval(changeBackground,2000);

	$("#loginBtn").click(function(){
		console.log("??")
		var check = false;
		$.getJSON("users.json", function (data) {
			var email  = $("#email").val();
			var pwd  = $("#pwd").val();
			for(user of data){
				if(user.email==email && user.password == pwd){
					$("#welcomeUser").html(`
						Welcome: ${user.email}
						`)

					$("#welcomeUserMobile").html(`
						Welcome: ${user.email}
						`)
					check = true;
					$('#myModal').modal('hide');
				}
			}
			if (check==false) {
				alert("Nhap email hoac mat khau sai")
			}
		})
	});

// Mobie menu
 var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

})

var countBackground = 1;
function setBackground(){
	var background = document.getElementById("background");
	var heightBackground =  window.innerHeight;
	background.style.height =  heightBackground + "px";

}

function changeBackground(){
	setBackground();

	switch(countBackground){
		case 1:
		background.style.background = "url('img/3.jpg')";
		break;

		case 2:
		background.style.background = "url('img/4.jpg')";
		break;

		case 3:
		background.style.background = "url('img/1.jpg')";
		break;
	}
	countBackground++;
	if (countBackground > 3) {
		countBackground = 1;
	}
}


function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}