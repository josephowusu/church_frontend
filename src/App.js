import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import WebsiteContext from './context/WebsiteContext';
import Home from './pages/Home';
import LoginScreen from './pages/LoginScreen';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<WebsiteContext />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
