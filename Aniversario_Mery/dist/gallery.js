const photoDialog = document.querySelector('#photo-dialog');
const expandedPhoto = document.querySelector('#expanded-photo');
const caption = document.querySelector('#photo-caption');
const romanticPhrases = {
  comienzos: 'Si pudiera volver al principio, volvería a elegirte. Contigo comenzó una de las historias más bonitas de mi vida.',
  camino: 'De todos nuestros recuerdos, lo que más amo es que los viví contigo. Hasta un día cualquiera se vuelve especial a tu lado.',
  embarazo: 'Ese día, nuestra historia abrió un nuevo capítulo. Y entre tantas emociones, qué bonito fue tenerte a mi lado para vivirlo juntos.',
  presente: 'Mi lugar favorito sigue siendo contigo, Mery. Hoy te elijo una vez más, y quiero seguir llenando la vida de recuerdos a tu lado.'
};
let selectedPhotoButton;
for (const memory of window.anniversaryMemories || []) {
  const gallery = [...document.querySelectorAll('[data-gallery]')].find(element => element.dataset.gallery === memory.section);
  if (!gallery) continue;
  const figure = document.createElement('figure');
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label', `Descubrir mensaje de amor: ${memory.alt}`);
  button.setAttribute('aria-haspopup', 'dialog');
  const image = document.createElement('img');
  image.src = memory.src;
  image.alt = memory.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  button.append(image);
  const invitation = document.createElement('span');
  invitation.className = 'photo-invitation';
  invitation.textContent = '♥ Toca para descubrir lo que siento';
  button.append(invitation);
  button.addEventListener('click', () => {
    selectedPhotoButton = button;
    expandedPhoto.src = memory.src;
    expandedPhoto.alt = memory.alt;
    caption.textContent = memory.phrase || memory.caption || romanticPhrases[memory.section];
    photoDialog.showModal();
  });
  figure.append(button);
  gallery.append(figure);
  const previewQuote = gallery.parentElement.querySelector('.memory-quote');
  if (previewQuote) previewQuote.hidden = true;
}
document.querySelector('.close-photo').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('close', () => selectedPhotoButton?.focus());
photoDialog.addEventListener('click', event => {
  const box = photoDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) photoDialog.close();
});
