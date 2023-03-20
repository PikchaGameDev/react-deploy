import axios from "axios";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export const useUserData = () => {
  const [data, setData] = useState<IUserData>({});
  const [token] = useToken();
  useEffect(() => {
    if (token && token.length > 0 && token !== "undefined") {
      axios
        .get("https://oauth.reddit.com/api/v1/me.json", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => {
          const userData = resp.data;
          setData({
            name: userData.name,
            iconImg: userData.icon_img.split("?")[0],
          });
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
};
