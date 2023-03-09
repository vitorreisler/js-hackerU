document.getElementById("draw").addEventListener("click", drawPyramid);

function drawPyramid() {
  document.getElementById("pyramid").innerHTML = "";
  let levels = document.getElementById("levels").value;
  for (let i = 0; i < levels; i++) {
    let row = document.createElement("div");
    row.classList.add("pyramid-row");
    let numBlocks = i * 2 + 1;
    for (let j = 0; j < numBlocks; j++) {
      let block = document.createElement("div");
      block.classList.add("pyramid-block");
      row.appendChild(block);
    }
    document.getElementById("pyramid").appendChild(row);
  }
}