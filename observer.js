
// +++++++ intersection observer ++++++++++++++++

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {

	const src = img.getAttribute("data-src");
	if (!src) {
		return;
	}
	img.src = src;

	const srcset = img.getAttribute("data-srcset");
	if (!srcset) {
		return;
	}
	img.srcset = srcset;
};

const imgOptions = {
	threshold: 1,
	rootMargin: "0px 0px 1000px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			preloadImage(entry.target);
			imgObserver.unobserve(entry.target);
		}
	});
}, imgOptions);

images.forEach(image => {
	imgObserver.observe(image);
});

// +++++++ intersection observer ++++++++++++++++





// cookie consent modal

// const openModal = document.querySelector(".open-button");
// const acceptCookies = document.querySelector(".accept");
// const rejectCookies = document.querySelector(".reject");
// const modal = document.querySelector(".modal");
// const footerCookiePrefs = document.querySelector('.footerCookiePrefs');

// window.onload = function () {
// 	modal.showModal();
// };

// acceptCookies.addEventListener("click", () => {
// 	modal.close();
// });

// rejectCookies.addEventListener("click", () => {
// 	modal.close();
// });


// footerCookiePrefs.addEventListener("click", () => {
// 	modal.showModal();
// });

