// <yt-formatted-string id="text" class="style-scope ytd-toggle-button-renderer style-default-active">189</yt-formatted-string>
// <yt-formatted-string id="text" class="style-scope ytd-toggle-button-renderer style-text">8</yt-formatted-string>
{/* <ytd-sentiment-bar-renderer id="sentiment" class="style-scope ytd-video-primary-info-renderer" activated_="" style="width: 140px;">
    
    <div id="container" class="style-scope ytd-sentiment-bar-renderer">
      <div id="like-bar" class="style-scope ytd-sentiment-bar-renderer" style="width: 98%;"></div>
    </div>
    <paper-tooltip position="top" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1"><!--css-build:shady-->

    <div id="tooltip" class="hidden style-scope paper-tooltip">
      1,433 / 18
    </div>
</paper-tooltip>
  </ytd-sentiment-bar-renderer> */}

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
  observer.observe(document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text')[0], {
      attributes: true,
      characterData:  true
  });
  hide_like_dislike();
} 

let observer = new MutationObserver(ObserveStream);
observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true
});