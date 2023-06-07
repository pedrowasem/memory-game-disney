import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { CardDisney, CardDisneyProps } from '../Card';

import './styles.css';

export interface GridProps {
	cards: CardDisneyProps[];
}

export function Grid({ cards }: GridProps) {
	const [stateCards, setStateCards] = useState(cards);

	useEffect(() => {
		axios.get('https://api.disneyapi.dev/character').then((response) => {
			const data = response.data;

			setStateCards(data.data);
		});
	}, []);

	const first = useRef<CardDisneyProps | null>(null);
	const second = useRef<CardDisneyProps | null>(null);
	const unflip = useRef(false);

	const handleClick = (id: string) => {
		const newStateCards = stateCards.map((card) => {
			// if (card.id !== id) return card;
			// if (card.flipped) return card;

			// if (unflip.current && first.current && second.current) {
			// 	first.current.flipped = false;
			// 	second.current.flipped = false;
			// 	first.current = null;
			// 	second.current = null;
			// 	unflip.current = false;
			// }
			// card.flipped = true;

			// if (first.current === null) {
			// 	first.current = card;
			// } else if (second.current === null) {
			// 	second.current = card;
			// }

			// if (first.current && second.current) {
			// 	if (first.current.back === second.current.back) {
			// 		first.current = null;
			// 		second.current = null;
			// 	} else {
			// 		unflip.current = true;
			// 	}
			// }
			return card;
		});

		setStateCards(newStateCards);
	};

	return (
		<>
			<div className="text">
				<h1>Memory Game Disney</h1>
			</div>
			<div className="grid">
				{stateCards.map((card) => {
					return (
						<CardDisney
							{...card}
							key={card.id}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
		</>
	);
}
