$(document).ready(function(){
	loadData();
});

function loadData(){
	alert("ok");
	$.getJSON("thuc_pham_nguoi_beo.json", function(data){
		console.log(data);
		// for(element of data){
		// 	$("#data").append(`
		// 		<div class="day">${data.tieude}</div>
		// 		<img id="img_thucdon" src=${data.img}>
		// 		<p>${data.noidung}</p>
		// 		<div class="boder"></div>
		// 		`);
		// }
	}).fail(function(){
		console.log("An error has occurred.");
	});
}