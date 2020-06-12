console.log("Our extension loaded");

var { excelForm, formKey, nextGen, QuestionId } = require("./important");

if (document.location.href.indexOf(nextGen) > -1) {
  let userName = document.getElementById("userNavLabel").innerText;
  let caseNumber = document.getElementById("CF00N4100000aQWb5_ileinner")
    .innerText;
  let opptyName = document.getElementById("Opportunity_ileinner").innerText;
  let opptyId = document
    .getElementById("Opportunity_ileinner")
    .children[0].pathname.replace("/", "");
  let quoteName = document.getElementById("Name_ileinner").innerText;

  excelForm = excelForm += `&${userName}&${caseNumber}&${opptyName}`;

  var container = document.getElementById("topButtonRow");
  var excelFromButton = document.createElement("input");
  Object.assign(excelFromButton, {
    id: "submitForm",
    className: "btn",
    type: "button",
    value: "Send Form",
    title: "send Form",
    style: "background:green",
  });
  container.appendChild(excelFromButton);

  document.getElementById("submitForm").addEventListener("click", function () {
    window.open(excelForm);
  });
}

if (document.location.href.indexOf("https://forms.office.com/Pages/") > -1) {
  var urlParameterList = decodeURI(document.location.href);
  urlParameterList = urlParameterList.split("?");
  var urlParameter = urlParameterList[1].split("&");
  // urlParameter = decodeURI(urlParameter);
  console.log(urlParameter);

  localStorage.setItem(
    formKey,
    JSON.stringify([
      {
        Answer: urlParameter[1],
        QuestionId: QuestionId[0],
      },
      {
        Answer: urlParameter[2],
        QuestionId: QuestionId[1],
      },
      {
        Answer: urlParameter[3],
        QuestionId: QuestionId[2],
      },
    ])
  );

  var inputFieldCheck = 0;
  var inputFieldClass = document.getElementsByClassName(
    "office-form-question-textbox office-form-textfield-input form-control border-no-radius"
  );
  for (let i = 0; i < inputFieldClass.length; i++) {
    if (inputFieldClass.value !== " ") {
      inputFieldCheck++;
    }
  }

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  console.log("done");
}
