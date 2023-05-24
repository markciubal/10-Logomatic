# 10-Logomatic
  
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
## Table of Contents
- [Descrption](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Github](#github)
- [Questions](#questions)
- [License](#license)
- [Credits](#credits)

## Description
Logomatic is a small application that builds a logo based on 4 parameters:

* Label
* Label Color
* Shape
* Shape Color

By providing this information, Logomatic generates an .svg file that contains the requested logo criteria. This was built to explore the usage of test-driven development, and to show that by working against a test, we are able to build robust applications.

This application was meant to satisfy the following user story:

```md 
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
✅ THEN I can enter up to three characters
WHEN I am prompted for the text color
✅ THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
✅ THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
✅ THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
✅ THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
✅ THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation
```bash
npm install
```

## Usage
```bash
node index.js
```

## Contribution
Want to see something changed? Submit a merge request!

## Tests
```bash
npm run test
```

## Questions
### Have questions for me?
[Email me!](mailto:mark.ciubal@gmail.com)

### Outstanding Questions
N/A

## Github
Github: [markciubal](https://www.github.com/markciubal)

## License

### The Unilicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

## Credits
Made by: Mark Ciubal
