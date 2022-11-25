import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

const onCreateBtn = e => {
  e.preventDefault();

  const {
    delay: delayValue,
    step: stepValue,
    amount: amountValue,
  } = e.currentTarget.elements;

  let delay = Number(delayValue.value);
  const step = Number(stepValue.value);
  const amount = Number(amountValue.value);

  if ((delay || step || amount) < 0) {
    Notify.failure('Please write positive value');
    e.currentTarget.reset();
  }

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
};

formRef.addEventListener('submit', onCreateBtn);

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

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
