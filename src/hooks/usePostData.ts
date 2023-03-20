import axios from "axios";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";

interface IPostData {
  id?: string;
  author?: string;
  title?: string;
  rating?: string;
  commentsCount?: string;
  avatar?: string;
  previewImg?: string | undefined;
  datePostUtc?: string;
}

export const usePostData = () => {
  const [data, setData] = useState<Array<IPostData>>([]);
  const [token] = useToken();
  useEffect(() => {
    if (token && token.length > 0 && token !== "undefined") {
      axios
        .get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => {
          const userData = resp.data.data.children.map(
            (item: { data: any }) => ({
              id: item.data.id,
              author: item.data.author,
              title: item.data.title,
              rating: item.data.ups,
              avatar: item.data.sr_detail.icon_img
                ? item.data.sr_detail.icon_img
                : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
              previewImg: item.data.preview
                ? item.data.preview.images?.[0].source.url.replace(
                    /(\&amp\;)/g,
                    "&"
                  )
                : "https://st.depositphotos.com/1000122/2016/i/450/depositphotos_20163697-stock-photo-small-scottish-straight-kitten-walking.jpg",
              datePostUtc: item.data.created_utc,
            })
          );
          setData(userData);
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
};
