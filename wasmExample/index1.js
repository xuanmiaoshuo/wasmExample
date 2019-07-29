import asmPromise from "./assembly/moduleEntry.ts";
asmPromise.then(function(asmModule){
  // here you can use the wasm.exports
  asmModule.step();
})

