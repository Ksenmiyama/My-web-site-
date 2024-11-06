function changeImage(element){
 const img = element.querySelector('img');
 const currentSrc = img.src;
 const altSrc = img.getAttribute('data-alt');
 img.src = altSrc;
 img.setAttribute('data-alt',currentSrc)
}