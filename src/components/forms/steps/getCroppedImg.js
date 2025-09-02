// getCroppedImg.js
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // Needed for cross-origin images
    image.src = url;
  });

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * This function returns the cropped image as a `Blob`.
 *
 * @param {string} imageSrc - The source URL of the image.
 * @param {Object} pixelCrop - The pixel crop area.
 */
export default async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const rotation = 0; // Assuming no rotation for this use case

  const { width: cropWidth, height: cropHeight } = pixelCrop;

  const rotationInRads = getRadianAngle(rotation);

  // Set canvas dimensions
  canvas.width = cropWidth;
  canvas.height = cropHeight;

  // Draw the image onto the canvas, applying the crop
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(rotationInRads);
  ctx.drawImage(
    image,
    -pixelCrop.x - image.width / 2,
    -pixelCrop.y - image.height / 2
  );
  ctx.restore();

  // Return the cropped image as a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      resolve(file);
    }, "image/jpeg");
  });
}
