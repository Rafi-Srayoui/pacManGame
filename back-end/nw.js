const { parentPort, workerData } = require("worker_threads");
let id_1 = "p_1";
let id_2 = "p_2";

parentPort.on("message", (message) => {
  let v = message.value + 10;
  parentPort.postMessage({ id: message.id, value: v });
});
