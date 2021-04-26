$(document).ready(function(){
	loadData();
});

function loadData(){
	$.getJSON("do_uong_nguoi_gay.json", function(data){
		for(element of data){
			console.log(data);
			$("#data").append(`
				<div class="day">${element.tieude}</div>
				<img id="img_thucdon" src=${element.img}>
				<p>${element.noidung}</p>
				<div class="boder"></div>
			`);
		}
	}).fail(function(){
		console.log("An error has occurred.");
	});
}

