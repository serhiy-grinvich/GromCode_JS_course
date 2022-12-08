const addImage = (imgURL, callbackFunc) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'Nature photo');
  imgElem.src = imgURL;
  const pageElem = document.querySelector('.page');
  pageElem.append(imgElem);
  //
  const onImgLoad = () => {
    const { width, height } = imgElem;
    const dataSize = { width, height };
    callbackFunc(null, dataSize);
  };
  imgElem.addEventListener('load', onImgLoad);
  imgElem.addEventListener('error', () => callbackFunc('Image load is failed'));
};

const whenImgLoaded = (error, sizeData) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = sizeData;

  const sizeIMGElem = document.querySelector('.image-size');
  sizeIMGElem.textContent = `${width} x ${height}`;
};
const imageSrc =
  'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/parts-url.jpg?width=1190&height=800&name=parts-url.jpg';
addImage(imageSrc, whenImgLoaded);
// algo
// create dom el for img
// add path to imgEl
// add imgEl to pageEL
// add listner for loaded image
// - - get size from img el
// add listner for error
// if error true - log the error
// if false add size to size elem
