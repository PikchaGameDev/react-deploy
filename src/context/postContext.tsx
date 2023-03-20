import React, { createContext } from "react";
import { usePostData } from "../hooks/usePostData";

interface IPostContextData {
  id?: string;
  author?: string;
  title?: string;
  rating?: string;
  commentsCount?: string;
  avatar?: string;
  previewImg?: string | undefined;
  datePostUtc?: string;
}

export const postContext = createContext<Array<IPostContextData>>([]);

export function PostContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = usePostData();
  return <postContext.Provider value={data}>{children}</postContext.Provider>;
}
