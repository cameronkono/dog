function activateInfo(){

    document.getElementById('info').classList.remove('hide');

    document.getElementById('shows').classList.add('hide');

    document.getElementById('infoX').classList.remove('hide');

    document.getElementById('showsX').classList.add('hide');

    document.getElementById('showsTab').classList.remove('hide');

    document.getElementById('infoTab').classList.add('hide');
}

function activateShows(){

    document.getElementById('shows').classList.remove('hide');

    document.getElementById('info').classList.add('hide');

    document.getElementById('showsX').classList.remove('hide');

    document.getElementById('infoX').classList.add('hide');

    document.getElementById('infoTab').classList.remove('hide');

    document.getElementById('showsTab').classList.add('hide');
}

function closeAll(){

    document.getElementById('info').classList.add('hide');

    document.getElementById('shows').classList.add('hide');

    document.getElementById('infoX').classList.add('hide');

    document.getElementById('showsX').classList.add('hide');

    document.getElementById('infoTab').classList.remove('hide');

    document.getElementById('showsTab').classList.remove('hide');
}

const div = document.querySelector('.signUp');
const span = document.querySelector('.signUpSpan');


createDynamicTextbox(div, span);


function createDynamicTextbox(outer, inner) {
  if (!outer.style.fontSize) outer.style.fontSize = outer.clientHeight;
  const initialSize = +outer.style.fontSize.match(/\d+/)[0];

  inner.addEventListener('input', function(e) {
    let [n, unit] = outer.style.fontSize.split(/(?<![a-z])(?=[a-z]+)/);
    n=+n;

    while (outer.offsetWidth > inner.offsetWidth) {
      n++;
      outer.style.fontSize = n+unit;
      if (n >= initialSize) return;
    }

    while (inner.offsetWidth > outer.offsetWidth) {
      n--;
      outer.style.fontSize = n+unit;
      if (n <= 0) return;
    }
  });

  inner.dispatchEvent(new InputEvent('input'));
}