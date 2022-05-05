/**
 *
 * @param arr1 first array
 * @param arr2 second array
 * @param config.mustBeSameLength optional, default false, if true throw error if not same length
 * @param config.makeSameLength optional, default false, if false array with its longer elements will appends in the end after crossing, if true will not append
 * @returns
 */
export const cross = <T, V>(
	arr1: T[],
	arr2: V[],
	config: { mustBeSameLength?: boolean; makeSameLength?: boolean } = {
		mustBeSameLength: false,
		makeSameLength: false,
	}
): (T | V)[] => {
	const length1 = arr1.length
	const length2 = arr2.length
	const { mustBeSameLength, makeSameLength } = config

	if (mustBeSameLength && length1 !== length2) {
		throw Error(
			`length is not the same, arr1 length is ${length1}, arr2 length is ${length2}`
		)
	}
	let arr1_ = JSON.parse(JSON.stringify(arr1)) as T[]
	let arr2_ = JSON.parse(JSON.stringify(arr2)) as V[]
	let tail: (T | V)[] = []

	if (length1 > length2) {
		arr1_ = arr1_.slice(0, length2)
		!makeSameLength && (tail = arr1.slice(length2))
	} else if (length2 > length1) {
		arr2_ = arr2_.slice(0, length1)
		!makeSameLength && (tail = arr2.slice(length1))
	}

	const crossed = arr1_
		.reduce<(T | V)[]>((acc, item, index) => {
			return [...acc, item, arr2_[index] as V]
		}, [])
		.concat(tail)

	return crossed
}
