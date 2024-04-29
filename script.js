const data = JSON.parse (dataBox);
const object = document.querySelector('.section-3__box2');
data.reverse().forEach(obj => {
  object.insertAdjacentHTML ('afterend', `
  <div class="section-3__box">
  <div class="section-3__box__1">
    <h4>${obj.h4}</h4>
    <p class="section-3__box__p">${obj.p1}</p>
  </div>
  <div class="section-3__box__2">
    <img src="${obj.img}" alt="image.png" />
  </div>
  <div class="section-3__box__3">
    <h3>${obj.h3}</h3>
    <p>${obj.p2}</p>
    <div class="section-3__box__3__p">
      <p class="section-3__box__3__1">${obj.p3}</p>
    </div>
  </div>
  <div>
    <button class="section-3__box__btn">${obj.button}</button>
  </div>
</div>
  `) });