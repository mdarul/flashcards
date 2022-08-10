export const backgroundGradientStartColor = '#DCE35B';
export const backgroundGradientEndColor = '#45B649';
export const contentColor = '#Fbff74';
export const grey = '#A0a0a0';

export const spacing = 8;

export const smallestFontSize = 10;
export const smallerFontSize = 12;
export const smallFontSize = 14;
export const standardFontSize = 16;
export const largeFontSize = 18;
export const largerFontSize = 20;
export const largestFontSize = 24;

export const getPaddingsShorthand = (...values: number[]) => {
	function getPaddingLeft() {
		if (values.length === 4) {
			return values[3];
		}
		return values.length === 1 ? values[0] : values[1];
	}

	if (values.length > 4 || values.length === 0) {
		return {};
	}

	return {
		paddingTop: values[0],
		paddingBottom: values.length <= 2 ? values[0] : values[2],
		paddingRight: values.length === 1 ? values[0] : values[1],
		paddingLeft: getPaddingLeft(),
	};
}

export const getMarginsShorthand = (...values: number[]) => {
	function getMarginLeft() {
		if (values.length === 4) {
			return values[3];
		}
		return values.length === 1 ? values[0] : values[1];
	}

	if (values.length > 4 || values.length === 0) {
		return {};
	}

	return {
		marginTop: values[0],
		marginBottom: values.length <= 2 ? values[0] : values[2],
		marginRight: values.length === 1 ? values[0] : values[1],
		marginLeft: getMarginLeft(),
	};
}
