import { useEffect, useState } from "react";
import { mainUrls } from "../api/dataRoutes";

export default function useLocationScroll(locationId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [locations, setLocations] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      setError(false);
      await fetch(mainUrls.location + locationId)
        .then((response) => {
          if (response.status !== 200) return "There must be a problem";
          return response.json();
        })
        .then((json) =>
          setLocations((prevLocations) => {
            setHasMore(!(json.id === 126));
            return Array.from(
              new Set([...prevLocations, json].map(JSON.stringify))
            ).map(JSON.parse);
          })
        );
    })();

    setLoading(false);
  }, [locationId]);

  return { loading, locations, hasMore };
}
