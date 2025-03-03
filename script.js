var vocab = null;
function OnLoad(){
  fetch("Vocab.json")
    .then(res => res.json())
    .then(res => vocab = res)
    .catch(error => console.error("Error retreiving vocab", error);
}
