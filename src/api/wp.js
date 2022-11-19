import axios from "axios";

export const wpPages = async () => {
  try {
    const res = await axios.get("https://sharelist.click/wp-json/wp/v2/pages");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const wpPosts = async () => {
  try {
    const res = await axios.get("https://sharelist.click/wp-json/wp/v2/posts");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
