const inquirer = require('inquirer')
const fs = require('fs')

// const generateMarkdown = require('./utils/generateMarkdown')

// MIT licesne badge, link, description
const mitLicense = `
## The MIT License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]

https://lbesson.mit-license.org/

The MIT License (MIT)
Copyright © 2022 Lilian Besson (Naereen), https://bitbucket.org/lbesson/ <naereen at crans dot org>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`;
// theUnlicense licesne badge, link, description
const theUnlicense = `
## The Unlicense License

[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)]

https://unlicense.org/

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

`;
// Creative Commons licesne badge, link, description
const creativeCommons = `
## The Creative Commons License

[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)]

https://creativecommons.org/licenses/by-nd/4.0

You are free to:
Share — copy and redistribute the material in any medium or format
for any purpose, even commercially.
The licensor cannot revoke these freedoms as long as you follow the license terms.
`;



function generateReadme() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'list',
        message: 'what license will you be using?',
        name: 'license',
        choices: [mitLicense, theUnlicense, creativeCommons],
      },
      {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'List your Table of Contents',
        name: 'table',
      },
      {
        type: 'input',
        message: 'Write Installation instructions here.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'List the usage of your project for the READme.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'P1. If you have uploaded a picture into assets, put it here. Example: (/assets/codingQuizPic.JPG)',
        name: 'pic1',
      },
      {
        type: 'input',
        message: 'P2. If you have uploaded a picture into assets, put it here. Example: (/assets/codingQuizPic.JPG)',
        name: 'pic2',
      },
      {
        type: 'input',
        message: 'P3. If you have uploaded a picture into assets, put it here. Example: (/assets/codingQuizPic.JPG)',
        name: 'pic3',
      },
      {
        type: 'input',
        message: 'the Next few questiosn will request contributors',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'List additional souurces and thier use in the project.',
        name: 'sources',
      },
    ])
    .then((data) => {

      let generated = `

#${data.title}

${data.license}

## Description
${data.description}

-------------------------------------

## Table of Contents
${data.table}

## Installation Instructions
${data.installation}

## How to Use
${data.usage}

![Portfolio]${data.pic1}
![Portfolio]${data.pic2}
![Portfolio]${data.pic3}

--------------------------------

## Contributors githubs
${data.contributors}

## Additional Sources
${data.sources}

https://github.com/Krimeas
Additional Sources:
https://naereen.github.io/badges/
      `;

      fs.writeFile('readme.md', generated, (err) => {
        (err) ? console.log(err) : console.log("sucess!")
      })
    });
}


// Function call to initialize app
generateReadme();
