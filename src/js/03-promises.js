const createBtnRef = document.querySelector('button');
const formRef = document.querySelector('.form');
const delayRef = document.getElementsByName('delay');
const stepRef = document.getElementsByName('step');
const amountRef = document.getElementsByName('amount');
// console.log(amountRef.value);

const onFormInput = e => {
  const amountValue = Number(e.target.value);
  // console.log();
};

formRef.addEventListener('input', onFormInput);

// let promises = formData.map(createPromise);
console.log(formData);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

// Promise.all(promises)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// -------------
// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       }
//       reject({ position, delay });
//     }, delay);
//   });
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
