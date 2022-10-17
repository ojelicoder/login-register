import axios from "axios";

const apiUrl = "https://6349e66e33bb42dca4fb79b6.mockapi.io/user";

const getAllUser = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const setUser = async (user) => {
  try {
    const response = await axios.post(
      apiUrl,
      { data: user },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, setUser };
