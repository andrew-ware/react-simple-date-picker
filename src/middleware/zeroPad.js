const zeroPad = (inp, length) => {
  let pad = '';
  if (`${inp}`.length < length) {
    for (let i = 0; i < length - `${inp}`.length; i += 1) {
      pad += '0';
    }
  }
  return `${pad}${inp}`;
};

export default zeroPad;
