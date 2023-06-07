/* eslint-disable no-constant-condition */
import { CssBaseline, ThemeProvider } from '@mui/material';

import AppRoutes from './configs/routes/AppRoutes';
import { dark, light } from './configs/theme';

function App() {
	return (
		<ThemeProvider theme={5 == 5 ? dark : light}>
			<CssBaseline />
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
