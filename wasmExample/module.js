const fs = require("fs");
const wasm = new WebAssembly.Module(fs.readFileSync(__dirname + "/dist/module.optimized.wasm"), {})
console.log('wasm', wasm)
const imports = {}
module.exports = new WebAssembly.Instance(wasm, imports).exports

// Object.defineProperty(module, "exports", {
//   get: () => new WebAssembly.Instance(wasm, imports).exports
// });
