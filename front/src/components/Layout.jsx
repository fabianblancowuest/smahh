import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav/Nav";
import About from "./About/About";
import Login from "./Login/Login";
import TicketForm from "./TicketForm/TicketForm";
import { useSelector } from "react-redux";
import AllTickets from "./AllTickets/AllTickets";
import SignUp from "./SignUp/SIgnUp";
import Landing from "./Landing/Landing";

const Layout = () => {
	const userType = useSelector((state) => state.userType);
	const navigate = useNavigate();

	React.useEffect(() => {
		if (userType === "user") {
			navigate("/");
		} else if (userType === "staff") {
			navigate("/");
		}
	}, [userType]);

	return (
		<div>
			{!userType && (
				<Routes>
					<Route path="/*" element={<CommonRoutes />} />
				</Routes>
			)}

			{userType === "user" && (
				<Routes>
					<Route path="/*" element={<UserRoutes />} />
				</Routes>
			)}

			{userType === "staff" && (
				<Routes>
					<Route path="/*" element={<StaffRoutes />} />
				</Routes>
			)}
		</div>
	);
};

const CommonRoutes = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" element={<Landing></Landing>} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>

		</div>
	)
}

const UserRoutes = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/tickets" element={<AllTickets />} />
				<Route path="/about" element={<About />} />
				<Route path="/riseticket" element={<TicketForm />} />
			</Routes>
		</div>
	);
};

const StaffRoutes = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/" element={<AllTickets />} />
			</Routes>
		</div>
	);
};

export default Layout;
