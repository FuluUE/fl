export default (text) => {
  return text.replace(/&(lt|gt|amp|quot|apos|nbsp);/g, function (match, pos, originalText) {
    return {
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&quot;': '\"',
      '&apos;': '\'',
      '&nbsp;': ' ',
    }[match];
  });
};
