	

$.getJSON("douongnguoibeo.json", function (data) {
	console.log(data);
	for(element of data){

		$("#data").append(`
			<div class="day">${element.Tieude}</div>
			<img id="img_thucdon" src=${element.img}>
			<p>${element.noi_dung}</p>
			<div class="boder"></div>
			`)
	}

})
