const map = {
  mi: 1,
  gi: (1 * 1024),
  ti: (1024 * 1024)
};

const parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(mi|gi|ti)$/i;

module.exports.parse = function (val) {
  const numBytes = parseInt(val, 10);

  if (!numBytes) {
    return null
  }

  const results = parseRegExp.exec(val);
  if (!results) {
    return numBytes * map['mi'];
  } else {
    const lowercaseUnit = results[4].toLowerCase();
    return numBytes * map[lowercaseUnit];
  }
}
