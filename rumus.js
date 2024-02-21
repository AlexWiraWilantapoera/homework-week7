exports.rumusKelilingPersegi = function (sisi) {
  return `Keliling persegi dengan panjang sisi ${sisi}cm adalah ${4 * sisi}cm.`;
};

exports.rumusKelilingPersegiPanjang = function (panjang, lebar) {
  return `Keliling persegi panjang dengan panjang ${panjang}cm dan lebar ${lebar}cm adalah ${2 * (panjang + lebar)}cm.`;
};
