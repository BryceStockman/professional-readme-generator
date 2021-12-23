module.exports = (templateData) => {
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
  // QUESTION: WOULD IT MAKE SENSE TO DESTRUCTURE THIS?
  console.log(templateData);
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
