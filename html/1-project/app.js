window.addEventListener('load', () => {

  let btn = document.querySelector('#btn');

  btn.addEventListener('click', (e) => {

    let circlePosX = e.clientX - btn.offsetLeft;
    let circlePosY = e.clientY - btn.offsetTop;
    let circle = document.createElement('span');
    
    btn.appendChild(circle);
    circle.style.left = circlePosX + 'px';
    circle.style.top = circlePosY + 'px';

    setTimeout(() => {
      circle.remove();
    }, 900);

  });
  
});