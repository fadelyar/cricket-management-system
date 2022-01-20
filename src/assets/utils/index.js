export const hexToRgb = (input) => {
	input = input + "";
	input = input.replace("#", "");
	let hexRegex = /[0-9A-Fa-f]/g;
	if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
		throw new Error("input is not a valid hex color.");
	}
	if (input.length === 3) {
		let first = input[0];
		let second = input[1];
		let last = input[2];
		input = first + first + second + second + last + last;
	}
	input = input.toUpperCase();
	let first = input[0] + input[1];
	let second = input[2] + input[3];
	let last = input[4] + input[5];
	return (
		parseInt(first, 16) +
		", " +
		parseInt(second, 16) +
		", " +
		parseInt(last, 16)
	);
};

export const findUniqueElement = function (arr1 = [], arr2 = []) {
	let resultArray = []
	for (let element of arr1) {
		if (!arr2.includes(element)) {
			resultArray = resultArray.concat(element)
		}
	}
	return resultArray
}

export const selectCorrectColor = function (arr1 = [], arr2 = []) {
	if (arr1.length === 0) return arr2[0]
	let selectedColor = null
	for (let color of arr2) {
		if (!arr1.includes(color)) {
			selectedColor = color
			return selectedColor
		}
	}
	return null
}

export const isShowBorder = function (currentDate, nextDate) {
	const date = new Date(currentDate).getDate()
	const nDate = new Date(nextDate).getDate()
	return date !== nDate
}

export const selectPropertiesFrom = function (obj) {
	const {score, ballFaced, fours, sixes, strikeRate} = obj
}

export const asyncImpl = function (callback) {
	return new Promise((resolve) => {
		resolve(callback)
	})
}

// export const arrayColor = [blue[600], red[600], green[700], purple['700'], yellow['900']]
export const arrayColor = ['blue', 'red', 'green', 'purple', 'black']

export const drawerWidth = 260


