const inquirer = require('inquirer')
const fs = require('fs')
// The above usitilize the Inquirer and fs 'file system' modules that have either been downloaded or included wiht this version of node.

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


// Generate Readme function that runs inquirer in your console once you open it and type 'node index.js'
// error when selecting license, alwasy selects the 'one above' on the list in the terminal.
function generateReadme() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'This series of questions will generate your Readme, please go slow and read each question carefully.  Press Enter to proceed now.',
        name: 'REMINDER',
      },
      {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
      },
      {
        type: 'list',
        message: 'Which of these three licenses will you be using?',
        name: 'license',
        choices: [mitLicense, theUnlicense, creativeCommons],
      },
      {
        type: 'input',
        message: 'Write a few sentences describing your application.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Write a few sentences describing how to install your application.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Write how to use your application, or link a video from assets.  Example: ![Portfolio](/assets/codingQuizPic.JPG)',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'The next three questions are requesting Pictures, press enter to pass through them if you have none.  Press Enter to proceed now.',
        name: 'pics',
      },
      {
        type: 'input',
        message: 'P1. If you have uploaded a picture into assets, put it here. Example: ![Portfolio](/assets/picture1.JPG)',
        name: 'pic1',
      },
      {
        type: 'input',
        message: 'P2. If you have uploaded a picture into assets, put it here. Example: ![Portfolio](/assets/picture2.JPG)',
        name: 'pic2',
      },
      {
        type: 'input',
        message: 'P3. If you have uploaded a picture into assets, put it here. Example: ![Portfolio](/assets/picture3.JPG)',
        name: 'pic3',
      },
      {
        type: 'input',
        message: 'Over the next Four questions you will be asked for a list of used technologies for your application.  Group then when necessary.  Press enter to leave empty. Press Enter to proceed now.',
        name: 'technologies',
      },
      {
        type: 'input',
        message: 'Did you use HTML, CSS, JavaScript? Example: 1. HTML, CSS',
        name: 'tech1',
      },
      {
        type: 'input',
        message: 'Did you use any frameworks such as Bootstrap or a code editor such as VSCode? Example: 2. Foundation, Lime.',
        name: 'tech2',
      },
      {
        type: 'input',
        message: 'Any special technologies can go here. Example: 3. node, Mocha',
        name: 'tech3',
      },
      {
        type: 'input',
        message: 'Any special technologies can go here. Example: 4. ESLint, Husky',
        name: 'tech4',
      },
      {
        type: 'input',
        message: 'The next four questions will ask for the github accounts of your contributors.  If you do not have any besides yourself, only put yourself in the first one.  Press enter to leave empty.  Press Enter to proceed now.',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'First Contributors Github Repository.',
        name: 'contributor1',
      },
      {
        type: 'input',
        message: 'Second Contributors Github Repository.',
        name: 'contributor2',
      },
      {
        type: 'input',
        message: 'Third Contributors Github Repository.',
        name: 'contributor3',
      },
      {
        type: 'input',
        message: 'Fourth Contributors Github Repository.',
        name: 'contributor4',
      },
      {
        type: 'input',
        message: `Enter your email address so that people may contact you with questions.`,
        name: 'questions',
      },
      {
        type: 'input',
        message: `List additional sources and their use in the application over the next five questions. Example: "1. General searching - www.google.com". Press Enter to proceed now.`,
        name: 'sources',
      },
      {
        type: 'input',
        message: 'List your first additional source the use in the application.',
        name: 'source1',
      },
      {
        type: 'input',
        message: 'List your second additional source the use in the application.',
        name: 'source2',
      },
      {
        type: 'input',
        message: 'List your third additional source the use in the application.',
        name: 'source3',
      },
      {
        type: 'input',
        message: 'List your fourth additional source the use in the application.',
        name: 'source4',
      },
      {
        type: 'input',
        message: 'List your fifth additional source the use in the application.',
        name: 'source5',
      },
    ])
    .then((data) => {
//  The variable the remaining data is buried in such as Table of contents, and the ## section titles.
      let generated = `# ${data.title}

## Table of Contents
  1. Description
  2. Installation Instructions
  3. Usage Instructions
  4. Technologies Used
  5. Contributor Repository Links
  6. Additional Sources

-------------------------------------

${data.license}

-------------------------------------

## Description
${data.description}


## Installation Instructions
${data.installation}


## Usage Instructions
${data.usage}


${data.pic1}
${data.pic2}
${data.pic3}

--------------------------------

### Technologies Used
${data.tech1}
${data.tech2}
${data.tech3}
${data.tech4}


### Contributors githubs
${data.contributor1}
${data.contributor2}
${data.contributor3}
${data.contributor4}

### Questions:
${data.questions}

### Additional Sources
${data.source1}
${data.source2}
${data.source3}
${data.source4}
${data.source5}



      `;
//    Writes the file with the data from the inquirer and 'generated' variable.
      fs.writeFile('readme.md', generated, (err) => {
        (err) ? console.log(err) : console.log("sucess!")
      })
    });
}


// Function call to initialize app
generateReadme();
