import express from "express";
import ReactDOM from "react-dom/server";
import { Header } from "../shared/Header.tsx";
import { indexTemplate } from "./indexTemplate";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(compression());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use("/static", express.static("./dist/client"));
app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(Header())));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server started on port http://localhost:3000");
});
