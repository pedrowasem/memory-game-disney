import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Layout from './Layout';

const AppRoutes: React.FC = () => {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
};

export default AppRoutes;
