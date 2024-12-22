/*export const resizeFile = async (
  file: string,
  name: string,
  mimeType: string
) => {
  return new Promise<File | null>((resolve, reject) => {
    const maxWidth = 1000;
    const maxHeight = 1000;

    if (!file) {
      reject(null);
    }

    const image = document.createElement('img');

    image.onload = () => {
      let width = image.width;
      let height = image.height;
      let isTooLarge = false;

      if (width >= height && width > maxWidth) {
        // width is the largest dimension, and it's too big.
        height *= maxWidth / width;
        width = maxWidth;
        isTooLarge = true;
      } else if (height > maxHeight) {
        // either width wasn't over-size or height is the largest dimension
        // and the height is over-size
        width *= maxHeight / height;
        height = maxHeight;
        isTooLarge = true;
      }

      if (!isTooLarge) {
        resolve(file);
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, width, height);

      canvas.toBlob((blob) => {
        const fileToSend = new File([blob], name, {
          type: mimeType,
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resolve(fileToSend);
      }, mimeType);
    };

    image.src = `data:${mimeType};base64, ${file}`;
  });
};*/

export const resizeFile = async (file: File) => {
  return new Promise<File | null>((resolve, reject) => {
    const maxWidth = 1000;
    const maxHeight = 1000;

    if (!file) {
      reject(null);
    }

    if (file.type.match(/image\/svg/) || file.type.match(/image\/gif/)) {
      resolve(file);
    }

    const image = document.createElement('img');

    image.onload = () => {
      let width = image.width;
      let height = image.height;
      let isTooLarge = false;

      if (width >= height && width > maxWidth) {
        // width is the largest dimension, and it's too big.
        height *= maxWidth / width;
        width = maxWidth;
        isTooLarge = true;
      } else if (height > maxHeight) {
        // either width wasn't over-size or height is the largest dimension
        // and the height is over-size
        width *= maxHeight / height;
        height = maxHeight;
        isTooLarge = true;
      }

      if (!isTooLarge) {
        resolve(file);
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, width, height);

      canvas.toBlob((blob) => {
        const fileToSend = new File([blob], file.name, {
          type: `image/${file.name.substring(file.name.lastIndexOf(`.`) + 1)}`,
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resolve(fileToSend);
      }, file.type);
    };

    const reader = new FileReader();
    reader.onload = (evt) => {
      image.src = evt.target.result as string;
    };
    reader.readAsDataURL(file);
  });
};
