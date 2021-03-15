let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
  console.log('sync!!!');
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
  console.log('onclick!!!');
  let color = element.target.value;
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor = "' + color + '";'
  });
};
