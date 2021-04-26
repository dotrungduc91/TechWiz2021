$(document).ready(function(){
	loadData();
});

function loadData(){
	alert("ok");
	$.getJSON("thuc_pham_nguoi_beo.json", function(data){
		console.log(data);
		for(element of data){
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