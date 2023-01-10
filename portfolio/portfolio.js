// 이름 글자 나오기
const content = "Hello, I'm Sue.";
const text = document.querySelector('#main_top_write_bottom');
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = '';
    i = 0;
  }
}

setInterval(typing, 300);

function appearHeader() {
  var header = document.getElementById('header2');
}
