testResult = document.querySelector("#result");


// 결과 div 너비 높이
function boxSize() {
  const boxSize2 = document.getElementsByClassName("result-boxsize");
  let boxWidth = boxSize2[0].value + "px";
  let boxHeight = boxSize2[1].value + "px";


  testResult.style.width = boxWidth;
  testResult.style.height = boxHeight;
}

// 결과 div 굵기, 가로 세로 정령
function boxRadio() {
  const boxWeight = document.getElementsByName("result-weight");
  const boxRow = document.getElementsByName("result-row");
  const boxCol = document.getElementsByName("result-col");

  for(i = 0; i < boxWeight.length ; i++) {
    if(boxWeight[i].checked)testResult.style.fontWeight = boxWeight[i].value;
  }

  for(i = 0; i < boxRow.length ; i++) {
    if(boxRow[i].checked) testResult.style.justifyContent = boxRow[i].value;
    if(boxCol[i].checked) testResult.style.alignItems = boxCol[i].value;
  }
}

// 결과 글자 크기, 글자 색, 배경색, 출력 문자열
function boxText() {
  const resultSize = Number(document.querySelector("#result-size").value) + "px";
  const fontColor = document.querySelector("#result-color").value;
  const boxBackColor = document.querySelector("#result-backcolor").value;
  const resultText = document.querySelector("#result-text").value;

  testResult.style.fontSize = resultSize;
  testResult.style.color = fontColor;
  testResult.style.backgroundColor = boxBackColor;
  testResult.innerText = resultText;
  
}

document.getElementById("play").addEventListener("click", () => {

  boxSize();
  boxRadio();
  boxText();
  
  testResult.style.border="3px solid black";
  
});