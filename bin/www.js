#!/usr/bin/env node

import app from "./app.js";
import createDebug from "debug";
import http from "http";

const debug = createDebug("callor-lotto:server");

const httpOption = {
  port: 12200,
};

const httpServer = http.createServer(app);
httpServer.listen(httpOption, "0.0.0.0");

httpServer.on("error", (error) => {
  if (error?.syscall !== "listen") throw error;
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});

httpServer.on("listening", () => {
  const addr = httpServer.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug(bind);
  console.log(`HTTP Listening on http://${httpOption.host}:${httpOption.port}`);
});
