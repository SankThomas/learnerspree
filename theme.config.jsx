export default {
  project: {
    link: "https://github.com/SankThomas/learner",
  },
  logo: <strong>Learner</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "Learner | %s",
    };
  },
  docsRepositoryBase: "https://github.com/SankThomas/learner/tree/main/",
  footer: {
    text: "Copyright Thomas Sankara 2023",
  },
};
