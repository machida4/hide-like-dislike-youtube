function hide_like_dislike(){
  let first_targets = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text');
  let second_targets = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-default-active');
  while(first_targets.length != 0){
    first_targets[0].parentNode.removeChild(first_targets[0]);
  }
  while(second_targets.length != 0){
    second_targets[0].parentNode.removeChild(second_targets[0]);
  }
}
hide_like_dislike();

function ObserveStream(){
  let observer = new MutationObserver(hide_like_dislike);
  observer.observe(document.getElementsByClassName('style-scope ytd-toggle-button-renderer')[0], {
      attributes: true,
      characterData:  true
  });
  hide_like_dislike();
} 

let observer = new MutationObserver(ObserveStream);
observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true
});
