exports.luas = function (panjang, lebar = 0) {
  if (lebar != 0) {
    return `Luas persegi panjang dengan panjang ${panjang}cm dan lebar ${lebar}cm adalah ${panjang * lebar}cm2.`;
  } else {
    return `Luas persegi dengan sisi ${panjang}cm adalah ${panjang * panjang}cm2.`;
  }
};

exports.keliling = function (panjang, lebar = 0) {
  if (lebar != 0) {
    return `Keliling persegi panjang dengan panjang ${panjang}cm dan lebar ${lebar}cm adalah ${2 * (panjang + lebar)}cm.`;
  } else {
    return `Keliling persegi dengan sisi ${panjang}cm adalah ${4 * panjang}cm.`;
  }
};
