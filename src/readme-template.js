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
    * ${tableOfContents[0]}
    * ${tableOfContents[1]}
    * ${tableOfContents[2]}
    * ${tableOfContents[3]}
    * ${tableOfContents[4]}

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
