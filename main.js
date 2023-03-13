document.getElementById('time').innerHTML = new Date().toLocaleString(); //현재시간 띄우기

function pink() {
  document.body.style.backgroundColor = 'pink';
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue';
}
function yellow() {
  document.body.style.backgroundColor = '#ffef9f';
}
function reset() {
  document.body.style.backgroundColor = 'rgb(229, 255, 228)';
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.';
}

function showcss() {
  document.getElementById('fig').src = 'img/css.jpg';
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.';
}

function showjs() {
  document.getElementById('fig').src = 'img/js.jpg';
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. ';
}

function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
