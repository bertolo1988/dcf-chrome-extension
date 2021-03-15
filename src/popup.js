import DiscountedCashFlow from 'discounted-cash-flow';

function safeParseNumberElement(element) {
  try {
    return parseFloat(element.value);
  } catch (err) {
    // nop
  }
}

let calculateButtonElement = document.getElementById('calculateButton');
calculateButtonElement.onclick = function (element) {
  let freeCashFlow = safeParseNumberElement(
    document.getElementById('freeCashFlow')
  );
  let growthRate = safeParseNumberElement(
    document.getElementById('growthRate')
  );
  let terminalPe = safeParseNumberElement(
    document.getElementById('terminalPE')
  );
  let discountRate = safeParseNumberElement(
    document.getElementById('discountRate')
  );
  const result = DiscountedCashFlow.calculate(
    freeCashFlow,
    [growthRate],
    terminalPe,
    discountRate
  );
  document.getElementById('result').value = result.totalPresentValue;
};

/* const DISCOUNT_RATE = 0.1;
const DECIMALS = 2;
const currentSharePrice = 346.39;
const currentMarketCap = 101.107;
const cash = 4.2;
const debt = 0;
const freeCashFlow = 1.385;
const growth = [0.05];
const terminalPE = 20;
const { totalPresentValue } = DiscountedCashFlow.calculate(
  freeCashFlow,
  growth,
  terminalPE,
  DISCOUNT_RATE,
  DECIMALS
);
const fairMarketCap = totalPresentValue - debt + cash;
const fairSharePrice = _.round(
  (fairMarketCap * currentSharePrice) / currentMarketCap,
  2
);
console.log(`fair share price: ${fairSharePrice}`); */
