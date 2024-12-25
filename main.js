document.addEventListener('DOMContentLoaded', () => {
	const typedElement = document.querySelector('.typed-out');
	const typedText = '"Web Developer"';
	let index = 0;

	function typeEffect() {
		if (index <= typedText.length) {
			typedElement.innerText = typedText.substring(0, index) + '|';
			index++;
			setTimeout(typeEffect, 100);
		} else {
			typedElement.innerText = typedText; // Persistent Text
		}
	}
	typeEffect();

	const form = document.getElementById('contact-form');
	const successMessage = document.getElementById('success-message');
	const errorMessage = document.getElementById('error-message');

	form.addEventListener('submit', async (event) => {
		event.preventDefault(); // Prevent refresh

		const formData = new FormData(form); // Collect form data

		try {
			const response = await fetch(form.action, {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				// Success Msg
				successMessage.style.display = 'block';
				errorMessage.style.display = 'none';
				form.reset(); // Clear the form
			} else {
				throw new Error('Form submission failed');
			}
		} catch (error) {
			// Error Msg
			successMessage.style.display = 'none';
			errorMessage.style.display = 'block';
		}
	});
});
