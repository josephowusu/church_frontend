import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import WebsiteContext from './context/WebsiteContext';
import Home from './pages/Home';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HowTo from './pages/HowTo';
import Support from './pages/Support';
import ChangePasswordScreen from './pages/ChangeUserPasswordScreen';
import ForgotPassword from './pages/ForgotPassword';
import DashboardContext from './context/DashboardContext';
import Dashboard from './pages/main/Dashboard';
import SendSmS from './pages/main/SendSmS';
import SendEmail from './pages/main/SendEmail';
import Department from './pages/main/Department';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<WebsiteContext />}>
					<Route path="/" element={<Home />} />
					<Route path="/user_login" element={<LoginScreen />} />
					<Route path="/user_register" element={<RegisterScreen />} />
					<Route path="/forgot_password" element={<ForgotPassword />} />
					<Route path="/set_new_password" element={<ChangePasswordScreen />} />
					<Route path="/support" element={<Support />} />
				</Route>
				<Route element={<DashboardContext /> }>
					<Route path="/dashboard" element={<Dashboard /> } />
					<Route path="/send_sms" element={<SendSmS /> } />
					<Route path="/send_email" element={<SendEmail /> } />
					<Route path="/department" element={<Department /> } />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
