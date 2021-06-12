import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const initiateQuery = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await res.json();
      if (!isCancelled) {
        setResults(data.hits);
      }
    };
    const cancelPreviousQuery = () => {
      isCancelled = true;
    };
    initiateQuery();
    return cancelPreviousQuery;
  }, [query]);
  return (
    <div className="App">
      <input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <ul>
        {results.map((article: any) => (
          <li key={article.objectId}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
