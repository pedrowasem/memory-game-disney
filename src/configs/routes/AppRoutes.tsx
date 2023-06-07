import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cards from '../../pages/Cards';
import Home from '../../pages/Home';
import Layout from '../Layout';

const AppRoutes: React.FC = () => {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/card" element={<Cards />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
};

export default AppRoutes;
