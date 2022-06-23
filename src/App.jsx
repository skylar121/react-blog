import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/reset.css'
import './css/global.css'
import Homepage from './pages/Homepage'
import PostView from './pages/PostView';
import { BlogContextProvider } from './contexts/BlogContext'


function App() {
	return (
		<BlogContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/post-view/:id" element={<PostView />} />
					<Route path="*" element={<h1>No Page Found</h1>} />
				</Routes>
			</Router>
		</BlogContextProvider>
	);
}

export default App;
