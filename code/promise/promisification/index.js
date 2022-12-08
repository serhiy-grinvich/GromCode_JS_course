import { addImage } from './addImage.js';

// const imageSrc =
//   'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/parts-url.jpg?width=1190&height=800&name=parts-url.jpg';

export const addImageV2 = url => {
  return new Promise((resolve, reject) => {
    addImage(url, (error, data) => {
      error ? reject(error) : resolve(data);
    });
  });
};

// examples

addImageV2('https://server.com/image.png')
  // addImageV2(imageSrc)
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'

// algo
// create promise inside V2
// call V1 func in executor with:
// - - created callback which resolve or reject
