// const badCallback = (callback) => {
//   setTimeout(() => {
//      callback();
//      callback();
//   }, 1000);
// }
//
//
// badCallback(() => console.log('I want to run this only once'));

const funcPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('menna');
      resolve();
    }, 1000);
  })
}

funcPromise()
.then((res) => {
  console.log('resolved', res);
  throw new Error('erorrrrrrrrrr');
})
.then((res) => console.log('second', res))
.then((res) => console.log('third'))
.catch((err) => console.log('err///////////////', err))
.then(() => console.log(')))))))))))))))))'))
console.log('from master hello');
