import { Button } from '@mui/material';
import { useRef, useState } from 'react';

import { duplicateRegenerateSortArray } from '../../../../utils/cardsUtils';
import { CardDisney, CardDisneyProps } from '../Card';

import './styles.css';

export interface GridProps {
	cards: CardDisneyProps[];
}

export function Grid({ cards }: GridProps) {
	const [stateCards, setStateCards] = useState(() => {
		return duplicateRegenerateSortArray(cards);
	});

	const first = useRef<CardDisneyProps | null>(null);
	const second = useRef<CardDisneyProps | null>(null);
	const unflip = useRef(false);
	const [matches, setMatches] = useState(0);
	const [moves, setMoves] = useState(0);
	const handleReset = () => {
		setStateCards(duplicateRegenerateSortArray(cards));
		first.current = null;
		second.current = null;
		unflip.current = false;
		setMatches(0);
		setMoves(0);
	};

	const handleClick = (id: string) => {
		const newStateCards = stateCards.map((card) => {
			if (card.id !== id) return card;
			if (card.flipped) return card;

			if (unflip.current && first.current && second.current) {
				first.current.flipped = false;
				second.current.flipped = false;
				first.current = null;
				second.current = null;
				unflip.current = false;
			}
			card.flipped = true;

			if (first.current === null) {
				first.current = card;
			} else if (second.current === null) {
				second.current = card;
			}

			if (first.current && second.current) {
				if (first.current.back === second.current.back) {
					first.current = null;
					second.current = null;
					setMatches((m) => m + 1);
				} else {
					unflip.current = true;
				}

				setMoves((m) => m + 1);
			}
			return card;
		});

		setStateCards(newStateCards);
	};
	return (
		<>
			<div className="text">
				<h1>Memory Game Disney</h1>
				<p>
					Moves: {moves} | Matches: {matches} |{' '}
					<Button
						variant="contained"
						size="small"
						onClick={() => handleReset()}
					>
						Reset
					</Button>
				</p>
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
