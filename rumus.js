exports.rumusKelilingPersegi = function (sisi) {
  return `Keliling persegi dengan sisi ${sisi}cm adalah ${4 * sisi}cm.`;
};

exports.rumusLuasPersegi = function (sisi) {
  return `Luas persegi dengan sisi ${sisi}cm adalah ${sisi * sisi}cm2.`;
};

exports.rumusKelilingPersegiPanjang = function (panjang, lebar) {
  return `Keliling persegi panjang dengan panjang ${panjang}cm dan lebar ${lebar}cm adalah ${2 * (panjang + lebar)}cm.`;
};

exports.rumusLuasPersegiPanjang = function (panjang, lebar) {
  return `Luas persegi panjang dengan panjang ${panjang}cm dan lebar ${lebar}cm adalah ${panjang * lebar}cm2.`;
};
