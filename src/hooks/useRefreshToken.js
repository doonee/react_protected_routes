import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const REFRESH_TOKEN_URL = '/user/refreshToken';

  const refresh = async () => {
    const response = await axios.get(REFRESH_TOKEN_URL, {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.result);
      return { ...prev, accessToken: response.data.result };
    });
    return response.data.result;
  };
  return refresh;
};

export default useRefreshToken;
