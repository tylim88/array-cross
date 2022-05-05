import { cross } from 'array-cross'

const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6, 8]
const arr3 = [1, 3, 5, 7, 9]
const arr4 = [2, 4, 6, 8, 0]

describe('test cross', () => {
	it('test normal input, should pass', () => {
		expect(cross(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
		expect(cross(arr3, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
		expect(cross(arr1, arr4)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0])
		expect(cross(arr3, arr2, { makeSameLength: true })).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8,
		])
		expect(cross(arr1, arr4, { makeSameLength: true })).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8,
		])
	})

	it('test throw error', () => {
		expect(() => cross(arr3, arr2, { mustBeSameLength: true })).toThrow()
	})
})
