function tableOfContentsAdded(tableOfContentsArr) {
  let tableOfContentsEl;
  let tableOfContents = '';
  for (let i = 0; i < tableOfContentsArr.length; i++) {
    tableOfContentsEl = `* [${tableOfContentsArr[i]}](#${tableOfContentsArr[i]})\n`;
    tableOfContents += tableOfContentsEl;
  }
  console.log(tableOfContents);
  return tableOfContents;
}

module.exports = (templateData) => {
  // QUESTION: WOULD IT MAKE SENSE TO DESTRUCTURE THIS?
  const {
    title,
    description,
    tableOfContents,
    installation,
    usage,
    license,
    contributions,
    questions,
  } = templateData;

  // QUESTION: WHY IS THIS NOT RETURNING LINKS IN MY README?
  var returnString = '';

  returnString += `# ${title} ![github license](https://shields.io/badge/license-${license}-blue.svg)
  
## Description
${description}

## Table of Contents
${tableOfContentsAdded(tableOfContents)}
`;

  if (installation) {
    returnString += `
## Installation
${installation}
`;
  } else {
    returnString += '';
  }

  if (usage) {
    returnString += `
## Usage
${usage}
`;
  } else {
    returnString += '';
  }

  if (license) {
    returnString += `
## License
This project is licensed under the ${license} see the URL below for more information.
(https://choosealicense.com/licenses/${license}/)
`;
  } else {
    returnString += '';
  }

  if (contributions) {
    returnString += `
## Contribute
${contributions}
`;
  } else {
    returnString += '';
  }

  if (questions) {
    returnString += `
## Questions
${questions}
`;
  } else {
    returnString += '';
  }
  return returnString;
};
