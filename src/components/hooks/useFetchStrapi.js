import React, { useEffect, useState } from "react";
import axios from "axios";
const URL_API = process.env.REACT_APP_API;

const useFetchStrapi = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_API + path)
      .then((res) => {
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
