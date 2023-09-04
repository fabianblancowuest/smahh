
const validateContact = (inputs) => {
	let errors = {};

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (!emailRegex.test(inputs.email)) {
		errors.email = "The email format is not valid";
	}

	if (inputs.subject.trim() === "") {
		errors.subject = "Subject is required";
	}

	if (inputs.message.trim() === "") {
		errors.message = "Message is required";
	}

	return errors;
};

export default validateContact