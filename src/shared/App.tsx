import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "../context/userContext";
import { PostContextProvider } from "../context/postContext";

function AppComponent() {
  return (
    <Layout>
      <UserContextProvider>
        <Header />
      </UserContextProvider>
      <Content>
        <PostContextProvider>
          <CardsList />
        </PostContextProvider>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
