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

const funcA = async (num) => {
  await wait(1000);
  console.log(num + "A1");
  await wait(2000);
  console.log(num + "A2");
  await wait(3000);
  console.log(num + "A3");
};

const funcB = async (num) => {
  await wait(2000);
  console.log(num + "B1");
  await wait(1000);
  console.log(num + "B2");
  await wait(3000);
  console.log(num + "B3");
};

const funcC = async () => {
  console.log("C1");
  await funcA("1");
  console.log("C2");
  await funcB("1");
  console.log("C3");
  await funcA("2");
};

const funcD = async () => {
  console.log("D1");
  await funcB("2");
  console.log("D2");
  await funcA("3");
  console.log("D3");
  await funcB("3");
};

const main = async () => {
  console.log("start");
  await Promise.all([funcC(), funcD()]);
  console.log("end");
};

main();
