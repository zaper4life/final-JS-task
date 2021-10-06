const complement = document.querySelector(".request-complement");
const divStyler = popmotion.styler(complement);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(complement, "mousedown touchstart").start(e => {
  fetch("/complement")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    document.querySelector(".complement").innerText = data.complement;
  })
  .catch(function(err) {
    console.error(err);
  });
  
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup").start(() => {
  
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200
    })
    .start(ballXY);
    

});