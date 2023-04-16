// Конвектор валют

const valueInputNode = document.querySelector('.calculation__value-input');
const CurrencySelectorNode = document.querySelector('.calculation__currency-select');
const outputNode = document.querySelector('.calculation__output');

function getInput() {
   return {
      rub: Number(valueInputNode.value),
      currency: CurrencySelectorNode.value
   }
}  

function render(result) {
   outputNode.innerHTML = result;
}

valueInputNode.addEventListener('input', function () {
   const result = convert(getInput());
   render(result);
});

CurrencySelectorNode.addEventListener('change', function () {
   const result = convert(getInput());
   render(result);
});

// Отображение текущего курса

function exchangeRub() {
   const exchangeRub = document.querySelector('.calculation__exchange').innerHTML = `
   <div class="calculation__exchange-text">Текущий курс: ${ratest.rub}.00 RUB = ${ratest.rub} RUB</div>
   `;
}

function exchangeUsz() {
   const exchangeUsz = document.querySelector('.calculation__exchange').innerHTML = `
      <div class="calculation__exchange-textt"> Текущий курс: ${ratest.rub}.00 RUB = ${ratest.usz} USZ</div>
      `;
}

function exchangeChf() {
   const exchangeUsz = document.querySelector('.calculation__exchange').innerHTML = `
      <div class="calculation__exchange-textt"> Текущий курс: ${ratest.rub}.00 RUB = ${ratest.chf} CHF</div>
      `;
}

function exchangeUsd() {
   const exchangeUsz = document.querySelector('.calculation__exchange').innerHTML = `
      <div class="calculation__exchange-textt"> Текущий курс: ${ratest.rub}.00 RUB = ${ratest.usd} USD</div>
      `;
}
