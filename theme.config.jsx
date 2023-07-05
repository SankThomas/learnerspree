export default {
  project: {
    link: "https://github.com/SankThomas/learnerspree",
  },
  logo: <strong>learnerspree</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "Learnerspree | %s",
    };
  },
  docsRepositoryBase: "https://github.com/SankThomas/learnerspree/tree/main/",
  footer: {
    text: "Copyright Thomas Sankara 2023",
  },
};
