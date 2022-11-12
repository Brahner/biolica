document.addEventListener('DOMContentLoaded', function() {
	const date = new Date();
	date.setMinutes(date.getMinutes() + 10);
	const deadline = date;
	let timerId = null;

	function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}

	function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
		clearInterval(timerId);
		}
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		const daysDeadline = deadline.getDate();
		const monthDeadline = deadline.getMonth() + 1;
		const yearDeadline = deadline.getFullYear();
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
		$daysDeadline.textContent = daysDeadline;
		$monthDeadline.textContent = monthDeadline;
		$yearDeadline.textContent = yearDeadline;
	}

	const $minutes = document.querySelector('.timer__minutes');
	const $seconds = document.querySelector('.timer__seconds');
	const $daysDeadline = document.querySelector('.deadline__days');
	const $monthDeadline = document.querySelector('.deadline__month');
	const $yearDeadline = document.querySelector('.deadline__year');
	countdownTimer();
	timerId = setInterval(countdownTimer, 1000);

	document.getElementById('scroll').addEventListener('click', scrollToElement);
	function scrollToElement(e) {
		let element = document.getElementById("product");
		element.scrollIntoView(true);
	}

});