const isEmpty = obj => {
  return JSON.stringify(obj) === '{}' || JSON.stringify(obj) === '[]';
};

export { isEmpty };
