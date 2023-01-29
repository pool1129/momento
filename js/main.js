function slide() {
  const slideWrap = document.querySelector(".slide-area");
  const slideCount = slideWrap.children.length;
  let count = 0;
  let cloneCount = 0;

  setInterval(() => {
    slideWrap.style.top = `-${10 * count}px`;
    count++;

    if (cloneCount < slideCount) {
      const cloneSlide = slideWrap.children[cloneCount].cloneNode(true);
      slideWrap.appendChild(cloneSlide);
      cloneCount++;
    } else {
      cloneCount = 0;
    }
  }, 100);
}

slide();
