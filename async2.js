// Promise.allのfunction内に含まれる非同期関数をawaitしている場合。
// それぞれの内部の非同期関数も非同期に動いてくれる。
// シングルスレッドとはいえ、できるだけ同時に進めようとはする。

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const measure = (func) => {
  console.log("start");
  window.performance.mark("myPerformanceStart");
  func();
  window.performance.mark("myPerformanceEnd");
  window.performance.measure(
    "myPerformance", // 計測名
    "myPerformanceStart", // 計測開始点
    "myPerformanceEnd" // 計測終了点
  );
  const results = window.performance.getEntriesByName("myPerformance");
  console.log("end");
  console.log(results[0]);
};

const calc = (prefix) => {
  let sum = 0;
  for (i = 0; i < 100000; i++) {
    for (j = 0; j < 10000; j++) {
      sum += (i ** 4 % 3) + 123;
    }
    if (i % 1000 == 0) {
      console.log(`${prefix} is ${i / 1000}`);
    }
  }
};
const async_calc = async (prefix) => {
  let sum = 0;
  for (i = 0; i < 100000; i++) {
    for (j = 0; j < 10000; j++) {
      sum += (i ** 4 % 3) + 123;
    }
    if (i % 1000 == 0) {
      console.log(`${prefix} is ${i / 1000}`);
    }
  }
};

const main = () => {
  measure(async () => {
    // calc("one");
    // calc("two");
    await Promise.all([async_calc("one"), async_calc("two")]);
  });
};

main();
