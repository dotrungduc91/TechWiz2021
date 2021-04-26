	
$.getJSON("yoga.json", function (data) {
	console.log(data);
	for(element of data){
		$("#data").append(`

					<div class="gym-colum">
					<div class="row">
						<div class="col-lg-6">
							<img src=${element.img} style="width: 100%;">
						</div>
						<div class="col-lg-6">
							<div class="sqs-block button-block sqs-block-button">
								<div class="sqs-block-content gym-title">
									<p>${element.title}</p>
									<div class="sqs-block-button-container--center">
										<a href=${element.link} class="sqs-block-button-element--small sqs-block-button-element" style="text-decoration: none;" target="_blank">Tìm hiểu ngay</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`)
	}
})
