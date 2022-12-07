import React, { useEffect, useState } from "react";
import axios from "axios";
const URL_API = "http://localhost:1337/api/";

export const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_API + path)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => setLoading(false));
  }, [path]);
  return { data, loading, err };
};
