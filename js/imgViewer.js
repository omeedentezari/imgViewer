// imgViewer.js

// DOMContentLoaded Event - set up imgViewer
document.addEventListener("DOMContentLoaded", () => {
  // Get thumbnail placeholders
  let imgs = document.querySelectorAll("[data-imgviewer-thumbnail]");
  
  // Loop over thumbnails in html
  for (let i=0;i < imgs.length;i++) {
    let imgloc = imgs[i].getAttribute('data-img-loc');
    let imgtitle = imgs[i].getAttribute('data-img-title');

    // Create thumbnail
    // Load img
    imgs[i].style.backgroundImage = `url(${imgloc})`;
    
    // Make pointer click cursor
    imgs[i].style.cursor = "pointer";

    // Load description to title
    imgs[i].title = imgtitle;

    // Inherit styles
    imgs[i].setAttribute('data-imgviewer-thumbnail','');

    // Make clickable to show full image
    imgs[i].addEventListener("click", () => {

      // Create imgBoundBox
      let imgBoundBox = createBoundBox();

      // Add elements to imgBoundBox
      addCloseBtn(imgBoundBox);
      createImgHolder(imgloc,imgBoundBox);

    }); // add

  } // for

}); // DOMContentLoaded

// Functions

// createBoundBox
// Creates the black background container that holds all viewer elements
function createBoundBox() {
  let imgbox = document.createElement('div');
  imgbox.setAttribute('data-imgviewer-boundbox','');

  // Place image box and append close button
  document.body.appendChild(imgbox);

  return imgbox;

} // createImgHolder

// createImgHolder
// Creates the div that holds the full image in its background
function createImgHolder(l,b) {
  let imgbox = b;
  let imgloc = l;
  let imgHoldElem = document.createElement('div');
  imgHoldElem.setAttribute('data-imgviewer-img','');

  // Set background image
  imgHoldElem.style.backgroundImage = `url(${l})`;

  b.appendChild(imgHoldElem);

} // createImgHolder

// addCloseBtn
// just adds a close button to the boundbox element
function addCloseBtn(b) {
  let imgbox = b;
  let closebtn = document.createElement('span');
  closebtn.setAttribute('data-imgviewer-close','');

  // create close button
  closebtn.innerHTML = 'close';

  // Add to parent element
  imgbox.appendChild(closebtn);

  // Make close button work
  closebtn.addEventListener("click", () => {
    document.body.removeChild(imgbox);
  }); // click

}
