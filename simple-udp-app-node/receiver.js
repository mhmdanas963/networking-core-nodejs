const dgram = require("node:dgram");

const receiver = dgram.createSocket("udp4");

receiver.on("message", (msg, rinfo) => {
  console.log(
    `Message: ${msg}, address: ${rinfo.address}, port: ${rinfo.port}`
  );
});

receiver.bind(3080, "::1", () => {
  console.log(`Receiver ready to receive data on ${receiver.address()}`);
});
