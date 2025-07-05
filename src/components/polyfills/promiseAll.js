const promiseAll = (promises) => {
  const total = promises.length;
  let resolved = 0;
  let res = [];

  if (promises.length === 0) {
    return [];
  }

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      if (!(promise instanceof Promise)) res[index] = promise;

      promise
        .then((val) => {
          resolved++;
          res[index] = val;
          if (resolved === total) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

// Helper functions
function delayResolve(value, time) {
  return new Promise((resolve) => setTimeout(() => resolve(value), time));
}

function delayReject(reason, time) {
  return new Promise((_, reject) => setTimeout(() => reject(reason), time));
}

// Call your promiseAll implementation here
// Example: await promiseAll([...]) — make sure your function is available

async function runTests() {
  // Test 1: All promises resolve
  try {
    const result1 = await promiseAll([
      delayResolve("A", 100),
      delayResolve("B", 50),
      Promise.resolve("C"),
    ]);
    console.log("✅ Test 1 Passed:", result1); // ["A", "B", "C"]
  } catch (err) {
    console.error("❌ Test 1 Failed:", err);
  }

  // Test 2: One promise rejects
  try {
    const result2 = await promiseAll([
      delayResolve("X", 50),
      delayReject("Error in promise", 30),
      delayResolve("Y", 10),
    ]);
    console.error("❌ Test 2 Failed — expected rejection, got:", result2);
  } catch (err) {
    console.log("✅ Test 2 Passed (Rejected as expected):", err);
  }

  // Test 3: Empty array
  try {
    const result3 = await promiseAll([]);
    console.log("✅ Test 3 Passed (Empty array):", result3); // []
  } catch (err) {
    console.error("❌ Test 3 Failed:", err);
  }

  // Test 4: Includes non-promise values
  try {
    const result4 = await promiseAll([1, "test", Promise.resolve("done")]);
    console.log("✅ Test 4 Passed (Mixed values):", result4); // [1, "test", "done"]
  } catch (err) {
    console.error("❌ Test 4 Failed:", err);
  }

  // Test 5: Rejection after a few resolutions
  try {
    const result5 = await promiseAll([
      delayResolve("First", 20),
      delayReject("Boom", 40),
      delayResolve("Should not reach", 60),
    ]);
    console.error("❌ Test 5 Failed — expected rejection, got:", result5);
  } catch (err) {
    console.log("✅ Test 5 Passed (Rejected early):", err);
  }
}

runTests();
