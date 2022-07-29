const updateLocal = (item, element) => {
  return localStorage.setItem(item, JSON.stringify(element));
};

const findData = (input) => {
  return input.getAttribute("data-input");
};
const searchSpan = (input, data) => {
  let formElements = input.parentNode.childNodes;
  let formSpans = [...formElements].filter((e) => e.tagName == "SPAN");
  let spanInput = formSpans.find(
    (span) => span.getAttribute("data-input") === data
  );
  return spanInput;
};
function inputError(input, mensaje, data) {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = mensaje;
  input.classList.add("form__error-validationInput");
}

const firstLetterMayus = (strs) => {
  const str = strs.trim();
  const firstLetterUpper = str.charAt(0).toUpperCase();
  const sliceStr = str.slice(1);
  const strFirstLetterMayus = firstLetterUpper + sliceStr;
  return strFirstLetterMayus;
};
const capitaliceStr = (strs) => {
  const strsNormalice = strs.toLowerCase();
  const strArr = strsNormalice.split(" ");
  let capitaliceString = "";
  strArr.forEach((str) => (capitaliceString += `${firstLetterMayus(str)} `));
  return capitaliceString.trim();
};
