import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import {
  CharactersCard,
  MediaPlayer,
  LandingPage,
  LocationsCard,
  SingleCharacterCard,
  SingleLocationCard,
  RickMorty,
} from "./components";

function App() {
  let [charactersPage, setCharactersPage] = useState(1);
  let [locationsPage, setLocationsPage] = useState(1);
  let [searchCharacter, setSearchCharacter] = useState("");
  let [searchLocation, setSearchLocation] = useState("");

  const characters = useCharacters(charactersPage, searchCharacter);
  const locations = useLocations(locationsPage, searchLocation);

  let { info, results } = characters;
  let locationResults = locations.results;

  return (
    <>
      <MediaPlayer />
      <div className="app">
        <RickMorty />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/characters"
          element={
            <CharactersCard
              results={results}
              setCharactersPage={setCharactersPage}
              setSearch={setSearchCharacter}
              info={info}
              charactersPage={charactersPage}
            />
          }
        />
        <Route
          path="/locations"
          element={
            <div className="container ">
              <div className="row d-flex justify-content-center">
                <div className="col-10">
                  <div className="row">
                    <LocationsCard
                      results={locationResults}
                      setPageNumber={setLocationsPage}
                      locationsPage={locationsPage}
                      setSearch={setSearchLocation}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/characters/:id" element={<SingleCharacterCard />} />
        <Route path="/locations/:id" element={<SingleLocationCard />} />
      </Routes>
    </>
  );
}

export default App;
