// import { useEffect, useState } from 'react';

import axios from 'axios';

export const cardsDisney = [];

axios.get('https://api.disneyapi.dev/character').then((response) => {
	const characters = response.data.data;

	characters.map(
		(character: { _id: number; imageUrl: string; name: string }) => {
			const newCharacter = {
				id: character._id,
				back: character.imageUrl,
				backDescription: character.name,
			};
			cardsDisney.push(newCharacter);
		},
	);
});

// const getAllCharacters = async () => {
// 	try {
// 		const response = await axios('https://api.disneyapi.dev/character');
// 		return response.data.data;
// 	} catch (error) {
// 		console.log('error.response');
// 	}
// };

// export const cardsDisney = map((character) => getAllCharacters());

// export const cardsDisney = () => {
// 	const [characters, setCharacters] = useState([]);

// 	const fetchUserData = () => {
// 		fetch('https://api.disneyapi.dev/character')
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((data) => {
// 				setCharacters(data);
// 			});
// 	};
// };

// useEffect(() => {
// 	fetchUserData();
// }, []);
