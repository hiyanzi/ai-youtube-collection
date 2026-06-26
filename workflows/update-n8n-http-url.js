const fs = require("fs");

const input = process.argv[2];
const output = process.argv[3] || input;
const workflows = JSON.parse(fs.readFileSync(input, "utf8"));
const workflow = workflows[0];

const requestNode = workflow.nodes.find((node) => node.name === "HTTP Request");
if (!requestNode) {
  throw new Error("HTTP Request node not found");
}

requestNode.parameters.url = "http://youtube-updater:5000/trigger-update";
fs.writeFileSync(output, JSON.stringify(workflows, null, 2));
