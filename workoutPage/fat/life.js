	
$.getJSON("fatJSON/life.json", function (data) {
	console.log(data);
	for(element of data){
		$("#data").append(`
			<div class="container">
			<div class="ob">
			<p class="run1">${element.title}</p>
			<p>${element.content}</p>
			<img src=${element.image} class="img">
			<iframe width="560" height="415" src=${element.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			</div>
			`)
	}

})
