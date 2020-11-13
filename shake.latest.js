let randVal = function(under5) {
  let num = Math.floor(Math.random() * 10);
  if(under5 && num > 5) return randVal(true)
  return num
};

window.shake = function(length) {
  document.body.style.display = "block"
  length = length || 1000;

  let shaking = setInterval(function() {
    document.body.style.transform = `translate(${
      randVal() > 4 ? "-" : ""
    }${randVal(true)}.${randVal()}${randVal()}px, ${
      randVal() > 4 ? "-" : ""
    }${randVal(true)}.${randVal()}${randVal()}px)`;
  }, 10);

  setTimeout(function() {
    clearInterval(shaking);
    document.body.style.transform = "";
  }, length);

  return shaking;
};
