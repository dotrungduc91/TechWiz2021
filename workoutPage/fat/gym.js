	$(function (argument) {
		$.getJSON("test.json", function (data) {
			console.log(data);
			for(element of data){
				$("#data").append(`
					<div class="container">
					<div class="ob">
					<p class="run1">${element.name}</p>
					<img src=${element.img} class="img" height="70%">
					<p>${element.content}</p>
					<iframe width="560" height="415" src=${element.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
					</div>
					`)
			}
		})
	})

