const { hello } = require("./demo");

let passed = 0;
let failed = 0;

function assertEqual(actual, expected, msg) {
  if (actual === expected) {
    passed++;
  } else {
    console.error(`FAIL: ${msg} (expected "${expected}", got "${actual}")`);
    failed++;
  }
}

assertEqual(hello(), "Hello, world!", "default");
assertEqual(hello("Claw"), "Hello, Claw!", "named");

console.log(`\nTests: ${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
