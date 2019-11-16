// https://qiita.com/mdstoy/items/9866544e37987337dc79
// https://qiita.com/hal1437/items/59d7a55124027d2ff492

function hide_like_dislike(){
  let first_targets = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text');
  let second_targets = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-default-active');
  // let like_bar = document.getElementById('like-bar');
  // for (let i = 0; i < elements.length; i++){
  //   if (elements[i].id === "text"){
  //     elements[i].innerHTML = '0000';
  //   }
  // }
  while(first_targets.length != 0){
    first_targets[0].parentNode.removeChild(first_targets[0]);
  }
  while(second_targets.length != 0){
    second_targets[0].parentNode.removeChild(second_targets[0]);
  }
  // like_bar.parentNode.removeChild(like_bar);
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