import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./NewContact.css";

const NewContact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hre43nq",
				"template_it5kkwt",
				form.current,
				"Qj-2BHcvaJJZlfg9O",
			)
			.then(
				(result) => {
					alert(result.text);
				},
				(error) => {
					alert(error.text);
				},
			);
	};

	return (
		<div className="container">
			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<button type="submit" value="Send">
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewContact;
