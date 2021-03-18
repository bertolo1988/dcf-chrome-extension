import _ from 'lodash';
import DiscountedCashFlow from 'discounted-cash-flow';

let calculateButtonElement = document.getElementById('calculateButton');
let openNewWindowElement = document.getElementById('openNewWindow');

openNewWindowElement.onclick = function () {
  chrome.windows.create({
    url: 'popup.html',
    type: 'panel',
    width: 200,
    height: 570
  });
};

function safeParseNumberElement(element) {
  try {
    return parseFloat(element.value);
  } catch (err) {
    // nop
  }
}

function getDataFromHtml() {
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
  let cash = safeParseNumberElement(document.getElementById('cash'));
  let debt = safeParseNumberElement(document.getElementById('debt'));
  let marketCap = safeParseNumberElement(document.getElementById('marketCap'));
  let stockPrice = safeParseNumberElement(
    document.getElementById('stockPrice')
  );
  return {
    freeCashFlow,
    growthRate,
    terminalPe,
    discountRate,
    cash,
    debt,
    marketCap,
    stockPrice
  };
}

function renderFairEnterpriseValue(fairEnterpriseValue) {
  document.getElementById('fairEnterpriseValue').value = fairEnterpriseValue;
}

function renderFairStockPrice(fairStockPrice) {
  document.getElementById('fairStockPrice').value = fairStockPrice;
}

function renderFairMarketCap(fairMarketCap) {
  document.getElementById('fairMarketCap').value = fairMarketCap;
}

calculateButtonElement.onclick = function () {
  const {
    freeCashFlow,
    growthRate,
    terminalPe,
    discountRate,
    cash,
    debt,
    marketCap,
    stockPrice
  } = getDataFromHtml();

  const result = DiscountedCashFlow.calculate(
    freeCashFlow,
    [growthRate],
    terminalPe,
    discountRate
  );
  renderFairEnterpriseValue(result.totalPresentValue);

  const fairMarketCap = result.totalPresentValue - debt + cash;
  renderFairMarketCap(fairMarketCap);

  const fairStockPrice = _.round((fairMarketCap * stockPrice) / marketCap, 2);
  renderFairStockPrice(fairStockPrice);
};
