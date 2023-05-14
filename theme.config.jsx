export default {
  project: {
    link: "https://github.com/SankThomas/eduketa",
  },
  logo: <strong>Eduketa</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "Eduketa | %s",
    };
  },
  docsRepositoryBase: "https://github.com/SankThomas/eduketa/tree/main/",
  footer: {
    text: "Copyright Thomas Sankara 2023",
  },
};
