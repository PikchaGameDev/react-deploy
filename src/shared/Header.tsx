import { hot } from "react-hot-loader/root";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./header.css";

function HeaderComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <header>
              <h1 className={styles.example}>Hello React</h1>
            </header>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export const Header = hot(HeaderComponent);
