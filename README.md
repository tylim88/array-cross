<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

# array-cross

<div>
		<a href="https://www.npmjs.com/package/array-cross" target="_blank">
				<img
					src="https://img.shields.io/npm/v/array-cross"
					alt="Created by tylim88"
				/>
			</a>
			&nbsp;
			<a
				href="https://github.com/tylim88/array-cross/blob/main/LICENSE"
				target="_blank"
			>
				<img
					src="https://img.shields.io/github/license/tylim88/array-cross"
					alt="License"
				/>
			</a>
			&nbsp;
			<a
				href="https://www.npmjs.com/package/array-cross?activeTab=dependencies"
				target="_blank"
			>
				<img
					src="https://img.shields.io/badge/dynamic/json?url=https://api.npmutil.com/package/array-cross&label=dependencies&query=$.dependencies.count&color=brightgreen"
					alt="dependency count"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/array-cross/actions" target="_blank">
				<img
					src="https://github.com/tylim88/array-cross/workflows/Main/badge.svg"
					alt="github action"
				/>
			</a>
			&nbsp;
			<a href="https://codecov.io/gh/tylim88/array-cross" target="_blank">
				<img
					src="https://codecov.io/gh/tylim88/array-cross/branch/main/graph/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/array-cross/issues" target="_blank">
				<img
					alt="GitHub issues"
					src="https://img.shields.io/github/issues-raw/tylim88/array-cross"
				></img>
			</a>
			&nbsp;
			<a href="https://snyk.io/test/github/tylim88/array-cross" target="_blank">
				<img
					src="https://snyk.io/test/github/tylim88/array-cross/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/array-cross/alerts/"
				target="_blank"
			>
				<img
					alt="Total alerts"
					src="https://img.shields.io/lgtm/alerts/g/tylim88/array-cross.svg?logo=lgtm&logoWidth=18"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/array-cross/context:javascript"
				target="_blank"
			>
				<img
					alt="Language grade: JavaScript"
					src="https://img.shields.io/lgtm/grade/javascript/g/tylim88/array-cross.svg?logo=lgtm&logoWidth=18"
				/>
			</a>

</div>
<br/>

## Installation

```bash
npm i array-cross
```

## Usage

return a deeply cloned array

```ts
import { cross } from 'array-cross'

const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6, 8]
const arr3 = [1, 3, 5, 7, 9]
const arr4 = [2, 4, 6, 8, 0]

cross(arr1, arr2) // [1, 2, 3, 4, 5, 6, 7, 8]
cross(arr3, arr2) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
cross(arr1, arr4) // [1, 2, 3, 4, 5, 6, 7, 8, 0]
cross(arr3, arr2, { makeSameLength: true }) // [1, 2, 3, 4, 5, 6, 7, 8]
cross(arr1, arr4, { makeSameLength: true }) // [1, 2, 3, 4, 5, 6, 7, 8]
```

must be same length

```ts
import { cross } from 'array-cross'

const arr2 = [2, 4, 6, 8]
const arr3 = [1, 3, 5, 7, 9]
cross(arr3, arr2, { mustBeSameLength: true }) // throw not same length
```
