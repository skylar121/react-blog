import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import PostView from './pages/PostView';


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/post-view/:id" element={<PostView />} />
				<Route path="*" element={<h1>No Page Found</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
