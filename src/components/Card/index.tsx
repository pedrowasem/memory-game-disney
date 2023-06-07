import './styles.css';

export interface CardDisneyProps {
	id: string;
	flipped?: boolean;
	back: string;
	backDescription: string;
	handleClick?: (id: string) => void;
}

export function CardDisney({
	flipped = false,
	back,
	backDescription,
	handleClick,
	id,
}: CardDisneyProps) {
	const cardContentClassNames = ['cardContent'];
	flipped && cardContentClassNames.push('cardContentFlipped');
	const handleClickFn = (id: string) => {
		if (handleClick) {
			handleClick(id);
		}
	};

	return (
		<div className="card" onClick={() => handleClickFn(id)}>
			<div className={cardContentClassNames.join(' ')}>
				<div className="cardFace cardFaceFront">?</div>
				<div className="cardFace cardFaceBack">
					<img src={back} />
					<div className=" cardContainer">{backDescription}</div>
				</div>
			</div>
		</div>
	);
}
