import { Box } from '@mui/material';

import { cardsDisney } from '../../data/cards';
import '../../index.css';
import { Grid } from './components/Grid';
import './styles.css';

const Home = () => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
			}}
		>
			<div className="container">
				<div className="app">
					<Grid cards={cardsDisney} />
				</div>
			</div>
		</Box>
	);
};

export default Home;
