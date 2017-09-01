export default (text) => {
  return text.replace(/[<>&"']/g, function (match, pos, originalText) {
    return {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '\"': '&quot;',
      '\'': '&apos;',
    }[match];
  });
};
