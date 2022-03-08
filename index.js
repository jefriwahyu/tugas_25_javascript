function angka() {
  var angka1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  function before() {
    return angka1;
  }
  console.log("Sebelumnya : " + before());

  function sorts() {
    return angka1.sort();
  }
  console.log("Ascending : " + sorts());

  function reverses() {
    return angka1.reverse();
  }
  console.log("Descending : " + reverses());

  return angka1.filter(angka1 => {
    return angka1 > 10;
  })
  // console.log("Filter > 10 : " + fil);
}

console.log("Filter > 10 : " + angka());
