import { useState, useEffect } from "react";
import "./App.scss";
import CardUI from './Card/Card';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData() {

    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <div className="App">
      <form className="search-form">
        <input
          type="text"
          className="search"
          placeholder="Type a Country!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search === "" ? (
          <p style={{fontSize: "26px",textAlign:"center"}} class="no-search">Fill the input to See Country List!</p>
        ) : (
            <div>
              {data
                .filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )
                .map((item, i) => (

                  <CardUI
                    flag={item.flag}
                    name={item.name}
                    code={item.alpha2Code}
                    capital={item.capital}
                    region={item.region}
                  />

                ))}
            </div>

          )}
      </form>
    </div>
  );
}

export default App;

