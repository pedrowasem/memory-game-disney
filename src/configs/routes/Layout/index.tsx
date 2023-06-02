/* eslint-disable react/prop-types */
import { Box } from '@mui/material';

import Background from '../../../assets/images/background.jpg';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box
			sx={{
				padding: '0px',
				margin: '0px',
				zIndex: '-1',
				height: 'min-content',
				background: `url(${Background})`,
			}}
		>
			{children}
		</Box>
	);
};
export default Layout;
