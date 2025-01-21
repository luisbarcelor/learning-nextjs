export const convertToDataUrl = (
  file: File,
  then: (dataUrl: string) => void,
) => {
  const fileReader = new FileReader();
  
  fileReader.onload = () => {
    if (typeof fileReader.result === 'string') {
      then(fileReader.result);
    }
  };
  fileReader.readAsDataURL(file);
};