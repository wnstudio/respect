var newWin = window.open('/', 'example', 'width=600,height=400');

alert(newWin.location.href); // (*) about:blank, загрузка ещё не началась

newWin.onload = function() {

  // создать div в документе нового окна
  var div = newWin.document.createElement('div'),
      body = newWin.document.body;

  div.innerHTML = 'Добро пожаловать!'
  div.style.fontSize = '30px'

  // вставить первым элементом в body нового окна
  body.insertBefore(div, body.firstChild);
}