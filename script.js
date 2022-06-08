// DOM elements
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const randomBtn = document.querySelector(".advice-random");

randomBtn.addEventListener("click", function () {
	let request = new XMLHttpRequest();
	request.open(
		"GET",
		"https://api.adviceslip.com/advice" +
			(/\?/.test("https://api.adviceslip.com/advice") ? "&" : "?") +
			new Date().getTime()
	);
	
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			let response = JSON.parse(request.response);
			console.log(response);
			adviceId.textContent = response.slip.id;
			adviceText.textContent = response.slip.advice;
		}
	};
	request.send();
});
