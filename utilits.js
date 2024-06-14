import AOS from 'aos';
import 'aos/dist/aos.css';

export const e8Utilits = {
	aosInit() {
		if (process.client) {
			AOS.init({
				offset: 0, // offset (in px) from the original trigger point
				delay: 0, // values from 0 to 3000, with step 50ms
				duration: 600, // values from 0 to 3000, with step 50ms
				easing: 'ease', // default easing for AOS animations
				once: true, // whether animation should happen only once - while scrolling down
				mirror: false, // whether elements should animate out while scrolling past them
				anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
			});
		}
	},
	counterUp() {
		const elements = document.querySelectorAll(".counter-text-wrap");

		function isInViewport(element) {
			const rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <=
				(window.innerWidth || document.documentElement.clientWidth)
			);
		}

		function handleCounterText(element) {
			const countText = element.querySelector(".count-text");
			const stopValue = parseInt(countText.getAttribute("data-stop"), 10);
			const speed = parseInt(countText.getAttribute("data-speed"), 10);

			if (!element.classList.contains("counted") && isInViewport(element)) {
				element.classList.add("counted");
				let start = 0;
				const step = Math.ceil(stopValue / (speed / 10));

				const interval = setInterval(() => {
					start += step;
					countText.textContent = Math.min(start, stopValue);

					if (start >= stopValue) {
						clearInterval(interval);
						countText.textContent = stopValue;
					}
				}, 10);
			}
		}

		window.addEventListener("scroll", () => {
			elements.forEach((element) => {
				if (!element.classList.contains("counted")) {
					handleCounterText(element);
				}
			});
		});
	},
	scrollTop() {
		let scrollUp = document.querySelector(".scroll-top"),
			lastScrollTop = 0;
		window.addEventListener("scroll", () => {
			let st = window.scrollY;
			if (st > 110) {
				scrollUp.style.display = "block";
			} else {
				scrollUp.style.display = "none";
			}
		});
	},
};
