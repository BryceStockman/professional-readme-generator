// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  return `
    # ${title}
    
    # ${description}

    # Table of Contents
    * [${tableOfContents[0]}](#-installation-instructions)
    * [${tableOfContents[1]}](#-usage)
    * [${tableOfContents[2]}](#-license)
    * [${tableOfContents[3]}](#-how-to-contribute)
    * [${tableOfContents[4]}](#-questions)

    # Installation Instructions
    ${installation}

    # Usage
    ${usage}

    # License
    ${license}

    # How to Contribute
    ${contributions}

    # Questions
    ${questions}
  `;
};
