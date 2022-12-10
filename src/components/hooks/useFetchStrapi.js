import React, { useEffect, useState } from "react";
import axios from "axios";
const URL_API = process.env.REACT_APP_STRAPI;

const useFetchStrapi = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_API + path)
      .then((res) => {
        console.log(res.data); //TODO: Delete later
        setData(res.data);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => setLoading(false));
  }, [path]);
  return { data, loading, err };
};

export default useFetchStrapi;
