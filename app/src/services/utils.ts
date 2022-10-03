export const getShuffledArray = (array: any[]) => {
	const copiedArray = [...array];
	for (let i = copiedArray.length - 1; i > 0; i -= 1) {
		const indexToSwap = Math.floor(Math.random() * (i + 1));
		const tmp = copiedArray[i];
		copiedArray[i] = copiedArray[indexToSwap];
		copiedArray[indexToSwap] = tmp;
	}

	return copiedArray;
};
