const eventEmitter = require("events");
const crypto = require("crypto");

const obj = Object.create(eventEmitter.prototype);
obj.on("beans", (data) => console.log(data));
obj.emit("beans", {
  name: "bruh",
  binary: crypto.randomBytes(20).toString("binary"),
});

const bruh = new eventEmitter();
bruh.on("beans", console.log);
