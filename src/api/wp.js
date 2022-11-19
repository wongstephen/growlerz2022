import axios from "axios";
const WPAPI = process.env.REACT_APP_WPAPI;

export const wpPages = async () => {
  try {
    const res = await axios.get(WPAPI + "pages/");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const wpPosts = async () => {
  try {
    const res = await axios.get(WPAPI + "posts/");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
