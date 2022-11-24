import React, { useEffect, useState } from "react";
import axios from "axios";
const WPAPI = process.env.REACT_APP_WPAPI;

export const useFetch = (type) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(WPAPI + type)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => setLoading(false));
  }, [type]);
  return { data, loading, err };
};
