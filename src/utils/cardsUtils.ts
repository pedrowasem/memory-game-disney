import { CardDisneyProps } from '../pages/Home/components/Card';

const keyGen = (): string => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

export const duplicateArray = <T>(array: T[]): T[] => {
	return [...array, ...array];
};

export const sortArray = <T>(array: T[]): T[] => {
	return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (cards: CardDisneyProps[]): CardDisneyProps[] => {
	return cards.map((card) => ({ ...card, id: keyGen() }));
};

export const duplicateRegenerateSortArray = (
	cards: CardDisneyProps[],
): CardDisneyProps[] => {
	return sortArray(regenerateCard(duplicateArray(cards)));
};
