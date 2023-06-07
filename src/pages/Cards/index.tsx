import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Pagination,
	Slider,
	TextField,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Cards = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [characters, setCharacters] = useState<any[]>([]);
	const [queryPage, setQueryPage] = useState<number>();
	const [querySize, setQuerySize] = useState<number | number[]>();
	const [totalPages, setTotalPages] = useState<number>();
	const [queryName, setQueryName] = useState<string>();
	const marks = [
		{
			value: 10,
			label: '10',
		},
		{
			value: 20,
			label: '20',
		},
		{
			value: 40,
			label: '40',
		},
		{
			value: 60,
			label: '60',
		},
		{
			value: 80,
			label: '80',
		},
		{
			value: 100,
			label: '100',
		},
	];

	useEffect(() => {
		axios
			.get('https://api.disneyapi.dev/character', {
				params: {
					page: queryPage == 1 ? '' : queryPage,
					pageSize: querySize === undefined ? 50 : querySize,
				},
			})
			.then((response) => {
				const charactersList = response.data;
				setTotalPages(charactersList.info.totalPages);
				setCharacters(charactersList.data);
				setQuerySize(50);
			});
	}, []);

	useEffect(() => {
		axios
			.get('https://api.disneyapi.dev/character', {
				params: {
					page: queryPage,
					pageSize: querySize,
					name: queryName,
				},
			})
			.then((response) => {
				const charactersList = response.data;
				setTotalPages(charactersList.info.totalPages);
				setCharacters(charactersList.data);
			});
	}, [queryPage]);

	useEffect(() => {
		axios
			.get('https://api.disneyapi.dev/character', {
				params: {
					page: queryPage,
					pageSize: querySize,
					name: queryName,
				},
			})
			.then((response) => {
				const charactersList = response.data;
				setTotalPages(charactersList.info.totalPages);
				setCharacters(charactersList.data);
			});
	}, [querySize]);

	useEffect(() => {
		axios
			.get('https://api.disneyapi.dev/character', {
				params: {
					name: queryName,
				},
			})
			.then((response) => {
				const charactersList = response.data;
				setTotalPages(charactersList.info.totalPages);
				setCharacters(charactersList.data);
				setQuerySize(charactersList.info.count);
				setQueryPage(1);
			});
	}, [queryName]);

	return (
		<Grid container spacing={4} padding={5}>
			<Grid item xs={6} sx={{ color: 'white' }}>
				<TextField
					id="Procurar"
					variant="standard"
					label="Procurar"
					fullWidth
					onChange={(event) => {
						setQueryName(event.currentTarget.value);
						console.log(queryName);
					}}
				/>
			</Grid>
			<Grid item xs={1}></Grid>
			<Grid item xs={2} sx={{ color: 'white' }}>
				<Typography id="input-slider" gutterBottom>
					Personagens por página
				</Typography>
				<Slider
					aria-label="input-slider"
					defaultValue={50}
					step={1}
					onChange={(e, value) => {
						setQuerySize(value);
					}}
					valueLabelDisplay="auto"
					marks={marks}
					size="small"
					min={1}
					max={100}
				/>
			</Grid>
			<Grid item xs={2} sx={{ color: 'white' }}></Grid>
			{characters.map((character) => (
				<Grid item xs={3} key={character._id}>
					<Card key={character._id}>
						<CardMedia
							sx={{ height: '400px', width: 'auto' }}
							image={character.imageUrl}
							title={character.name}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								{character.name}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
			<Pagination
				count={totalPages}
				defaultPage={queryPage}
				boundaryCount={1}
				onChange={(e, page) => {
					console.log(page);
					setQueryPage(page);
				}}
				color="primary"
				sx={{
					position: 'fixed',
					top: '95%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</Grid>
	);
};

export default Cards;
