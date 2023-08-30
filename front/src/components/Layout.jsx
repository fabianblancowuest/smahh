import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './Nav/Nav';
import About from './About/About';
import Login from './Login/Login';
import TicketForm from './TicketForm';
import { useSelector } from 'react-redux';
import AllTickets from './AllTickets';
import SignUp from './SignUp/SIgnUp';


const Layout = () => {
    const userType = useSelector(state => state.userType);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (userType === 'user') {
            navigate('/home');
        } else if (userType === 'staff') {
            navigate('/');
        }
    }, [userType]);


    return (
        <div>

            {!userType &&

                <Routes>
                    <Route path='/' element={<Nav />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>}

            {userType === 'user' && (
                <Routes>
                    <Route path='/*' element={<UserRoutes />} />
                </Routes>
            )}

            {userType === 'staff' && (
                <Routes>
                    <Route exact path='/' element={<Nav />} />
                </Routes>
            )}
        </div>
    );
}

const UserRoutes = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/home' element={<AllTickets />} />
                <Route path="/about" element={<About />} />
                <Route path="/riseticket" element={<TicketForm />} />
            </Routes>
        </div>
    );
}

export default Layout;