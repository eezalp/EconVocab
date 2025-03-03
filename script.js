var vocab = null;
function OnLoad(){
  vocab = "Error retreiving json"
  fetch("Vocab.json")
    .then(res => res.json())
    .then(res => {vocab = res})
    .catch(error => console.error("Error retreiving vocab", error));
  if(vocab){
    document.getElementById("text").innerHTML = vocab;
  }
}
