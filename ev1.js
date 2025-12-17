console.log("start");

process.nextTick(() => {
  console.log("nextTick 1");

  Promise.resolve().then(() => {
    console.log("promise inside nextTick");
  });

  process.nextTick(() => {
    console.log("nextTick 2");
  });
});

Promise.resolve().then(() => {
  console.log("promise 1");

  process.nextTick(() => {
    console.log("nextTick inside promise");
  });
});

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");


/**
 * 
 * start 
 * end 
 * next tick 1 
 * nexttick 2 
 * promise inside 
 * promise 1 
 * nexttick inside promise 
 * timeout
 *  
 */