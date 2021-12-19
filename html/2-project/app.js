window.addEventListener('load', () => {

  function scrollAppear() {
    const textBox = document.querySelectorAll('.text-box');
    const screenPosition = window.innerHeight;

    for (let i = 0; i < textBox.length; i++) {
      const textPosition = textBox[i].getBoundingClientRect().top;

      if (textPosition < screenPosition) {
        textBox[i].classList.add('scroll-on');
      } else {
        textBox[i].classList.remove('scroll-on');
      }
    }
  }

  window.addEventListener('scroll', scrollAppear);

});