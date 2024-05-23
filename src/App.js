import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import WebsiteContext from './context/WebsiteContext';
import Home from './pages/Home';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HowTo from './pages/HowTo';
import Support from './pages/Support';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<WebsiteContext />}>
					<Route path="/" element={<Home />} />
					<Route path="/user_login" element={<LoginScreen />} />
					<Route path="/user_register" element={<RegisterScreen />} />
					<Route path="/how_to" element={<HowTo />} />
					<Route path="/support" element={<Support />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
