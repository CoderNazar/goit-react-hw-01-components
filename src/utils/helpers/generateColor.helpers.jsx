export const generateColor = (typeFile) => {
  switch (typeFile) {
    case '.docx':
      return 'backgroundColorDocx';
    case '.pdf':
      return 'backgroundColorPdf';
    case ".mp3":
      return 'backgroundColorMp3';
    case ".psd":
      return 'backgroundColorPsd';
    case ".pdf":
      return 'backgroundColorPdf';
    default:
      return 'backgroundColorDefault'
  }
};
