const popmotion = require("popmotion")
const { styler, spring, listen, pointer, value } = popmotion;

const insult = document.querySelector(".request-insult");
const divStylerInsult = popmotion.styler(insult);
const ballXYInsult = popmotion.value({ x: 0, y: 0 }, divStylerInsult.set);

popmotion.listen(insult, "mousedown touchstart").start(e => {
  fetch("/insult")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    document.querySelector(".insult").innerText = data.insult;
  })
  .catch(function(err) {
    console.error(err);
  });
  
  e.preventDefault();
  popmotion.pointer(ballXYInsult.get()).start(ballXYInsult);
});

popmotion.listen(document, "mouseup").start(() => {
 
  popmotion
    .spring({
      from: ballXYInsult.get(),
      velocity: ballXYInsult.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200
    })
    
    .start(ballXYInsult);

    
    

});