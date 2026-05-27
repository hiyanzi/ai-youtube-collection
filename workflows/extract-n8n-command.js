const workflow = require(process.argv[2])[0];
const command = workflow.nodes.find((node) => node.name === "Fetch, Summarize, Commit, Push")
  ?.parameters?.command;

if (!command) {
  throw new Error("Fetch command not found");
}

console.log(command);
