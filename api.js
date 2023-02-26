export default {
  getRandomFact: async (lang) => {
    const res = await fetch(`https://meowfacts.herokuapp.com/?lang=${lang}`);
    const json = await res.json();
    return json.data;
  }
};
