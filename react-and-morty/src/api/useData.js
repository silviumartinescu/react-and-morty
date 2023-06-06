import { useEffect, useState } from "react";
import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";

/**
     Fetch data from an open-source API. It returns json containing pagination.
     The json contains an `info` and a `results` property. The `info` contains every information about the pagination,
     the `results` contains the characters objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number. The json `info` property contains how many pages are.
     */
export const useCharacters = (pageNum = 1, search) => {
  const [characters, setUrl] = useFetch(
    mainUrls.characters + pageNum + "&name=" + search
  );
  useEffect(() => {
    setUrl(mainUrls.characters + pageNum + "&name=" + search);
  }, [pageNum, search]);

  return characters === undefined ? "Loading..." : characters;
};

/**
     Fetch data from an open-source API. It returns json containing pagination.
     The json contains an `info` and a `results` property. The `info` contains every information about the pagination,
     the `results` contains the locations objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number. The json `info` property contains how many pages are.
     */
export const useLocations = (pageNum = 1, search) => {
  const [locations, setUrl] = useFetch(
    mainUrls.locations + pageNum + "&name=" + search
  );
  useEffect(() => {
    setUrl(mainUrls.locations + pageNum + "&name=" + search);
  }, [pageNum, search]);
  return locations === undefined ? "Loading..." : locations;
};

export const useGetCharacter = (id = 1) => {
  const [character, setUrl] = useFetch(mainUrls.character + id);
  useEffect(() => {
    setUrl(mainUrls.character + id);
  }, [id]);

  return character === undefined ? "Loading..." : character;
};

export const useGetLocation = (id = 1) => {
  const [location, setUrl] = useFetch(mainUrls.location + id);
  useEffect(() => {
    setUrl(mainUrls.location + id);
  }, [id]);
  return location === undefined ? "Loading..." : location;
};
