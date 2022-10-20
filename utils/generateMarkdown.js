const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseInfo(license) {
//   const mitLicense = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]

//   https://lbesson.mit-license.org/

//   The MIT License (MIT)
//   Copyright © 2022 Lilian Besson (Naereen), https://bitbucket.org/lbesson/ <naereen at crans dot org>

//   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

//   `;


//   const theUnlicense = `[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)]

//   https://unlicense.org/

//   This is free and unencumbered software released into the public domain.

//   Anyone is free to copy, modify, publish, use, compile, sell, or
//   distribute this software, either in source code form or as a compiled
//   binary, for any purpose, commercial or non-commercial, and by any
//   means.

//   In jurisdictions that recognize copyright laws, the author or authors
//   of this software dedicate any and all copyright interest in the
//   software to the public domain. We make this dedication for the benefit
//   of the public at large and to the detriment of our heirs and
//   successors. We intend this dedication to be an overt act of
//   relinquishment in perpetuity of all present and future rights to this
//   software under copyright law.

//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
//   IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
//   OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
//   ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//   OTHER DEALINGS IN THE SOFTWARE.

//   `;

//   const creativeCommons = `[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)]

//   https://creativecommons.org/licenses/by-nd/4.0

//   ##You are free to:
//   Share — copy and redistribute the material in any medium or format
//   for any purpose, even commercially.
//   The licensor cannot revoke these freedoms as long as you follow the license terms.
//   `;
// };

// function renderLicenseInfo(license) {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         message: 'What is the title of your project?',
//         name: 'title',
//       },
//       {
//         type: 'list',
//         message: 'what license will you be using?',
//         name: 'license',
//         choices: [mitLicense, theUnlicense, creativeCommons],
//       },
//     ])
//     fs.writeFile('readme.md', generatemarkdown(), generated, (err) => {
//       (err) ? console.log(err) : console.log("sucess!")
//     })
// };


// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   ## ${data.license}
// `;
// }

// module.exports = renderLicenseInfo();


//passed here like the generate scyan console.log