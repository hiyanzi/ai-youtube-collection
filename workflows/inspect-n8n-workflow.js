const workflowPath = process.argv[2];
const workflow = require(workflowPath)[0];

console.log(`id=${workflow.id}`);
console.log(`name=${workflow.name}`);
console.log(`active=${workflow.active}`);
console.log("nodes:");
for (const node of workflow.nodes) {
  const parameters = JSON.stringify(node.parameters || {});
  console.log(`- ${node.name} | ${node.type} | ${parameters.slice(0, 250)}`);
}
console.log("connections:");
console.log(JSON.stringify(workflow.connections || {}, null, 2));
