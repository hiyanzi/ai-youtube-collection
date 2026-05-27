const workflow = require(process.argv[2])[0];
const connectionNames = Object.keys(workflow.connections || {});
const command = workflow.nodes.find((node) => node.name === "Fetch, Summarize, Commit, Push")
  ?.parameters?.command || "";

console.log(`connections=${connectionNames.join(",")}`);
console.log(`active=${workflow.active}`);
console.log(`has_generated_at_guard=${command.includes("generated_at")}`);
console.log(`has_fetch_connection=${connectionNames.includes("Every 6 Hours")}`);
console.log(`has_if_connection=${connectionNames.includes("Fetch, Summarize, Commit, Push")}`);
