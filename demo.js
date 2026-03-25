// Simple demo app (no external deps)
const hello = (name) => `Hello, ${name || "world"}!`;

if (require.main === module) {
  console.log(hello(process.argv[2]));
}

module.exports = { hello };
