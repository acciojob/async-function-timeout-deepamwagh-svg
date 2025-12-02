//your JS code here. If required.
function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function showMessage() {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);

  await wait(delay);

  document.getElementById("output").innerText = text;
}
document.getElementById("btn").addEventListener("click", showMessage);
