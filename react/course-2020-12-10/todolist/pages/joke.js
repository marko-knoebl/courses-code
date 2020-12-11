const ChuckNorrisJoke = (props) => <article>{props.joke}</article>;

export const getStaticProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const text = (await res.json()).value;
  return { props: { joke: text } };
};

export default ChuckNorrisJoke;
