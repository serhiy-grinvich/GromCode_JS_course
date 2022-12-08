const imageSrc =
  'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/parts-url.jpg?width=1190&height=800&name=parts-url.jpg';

const addImage = imgURL => {
  return new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Nature photo');
    imgElem.src = imgURL;
    const pageElem = document.querySelector('.page');
    pageElem.append(imgElem);
    //
    const onImgLoad = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onImgLoad);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });
};

addImage(imageSrc).then((sizeData, error) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = sizeData;

  const sizeIMGElem = document.querySelector('.image-size');
  sizeIMGElem.textContent = `${width} x ${height}`;
});

// algo
// create and return promise
