/**
 * generate Html node for ad 
 * @param  {object} adData     data of AD
 * @return {string} adTemplate
 */
module.exports = function generateAdNode (adData) {
  insertStyle()
  const { 
    type,
    title,
    description,
    image,
    video_url,
    url
  } = adData

  const adTemplate = `
    <div id="ad-overlay" class="overlay" onclick="closeAd()">
      <div class="ad-contenct">
        <div class="remove-btn-wrapper" onclick="closeAd()">
          <div class="remove-btn remove-btn-01"></div>
          <div class="remove-btn remove-btn-02"></div>
        </div>
        <div class="ad">
        ${
          type === 'VIDEO'
            ? `<div class="imgWrapper">
                  <a 
                    class="play-icon" 
                    target="_blank" 
                    href=${video_url} 
                    onclick="javascript:(function(event) { event.stopPropagation(); })(event)"
                  >
                    <div class="play-icon-arrow"></div>
                  </a>
                  <h2 class='video-title'>${title}</h2>
                  <a target="_blank" href=${video_url}>
                    <img src=${image} />
                  </a>
              </div>`
            : ` <div class="imgWrapper">
                  <a 
                    target="_blank" href=${url} 
                    onclick="javascript:(function(event) { event.stopPropagation(); })(event)"
                  >
                    <img  src=${image} />
                  </a>
                </div>
                <div class='ad-desc'>
                  <h2>${title}</h2>
                  <h3>${description}</h3>
                </div>
            `
        }
        </div>
    </div>
  </div>`
  return adTemplate
}

/**
 * TODO: check if style already exist, prevent overwirte the original style
 * add class through insert style tag inside head tag
 */
function insertStyle () {
  var style = document.createElement('style')
  style.innerHTML =`
  #ad-overlay.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    z-index: 10000;
  }


  #ad-overlay .ad-contenct {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 80%;
    transform: translate(-50%, -50%);
  }

  #ad-overlay .ad-contenct .ad {
    width: 100%;
    height: 100%;
  }

  #ad-overlay img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #ad-overlay .remove-btn-wrapper {
    position: absolute;
    top: -7%;
    right: 0;
    width: 3%;
    height: 5%;
  }

  #ad-overlay .remove-btn {
    width: 15%;
    height: 100%;
  }

  #ad-overlay .remove-btn-01 {
    background: #000;
    transform: translate(250%, 0%) rotate(45deg);
  }

  #ad-overlay .remove-btn-02 {
    background: #000;
    transform: translate(250%, -98%) rotate(-45deg);
  }

  #ad-overlay h2 {
    color: #333;
    margin: 0;
  }

  #ad-overlay h3 {
    margin: 0;
  }

  #ad-overlay .ad-desc {
    background: #999;
    height: 20%;
  }

  #ad-overlay .imgWrapper {
    width: 100%;
    height: 80%;
  }

  #ad-overlay .video-title {
    font-size: 2rem;
    position: fixed;
    top: 2%;
    left: 2%;
    color: white;
    text-shadow: 2px 2px 3px #333;
  }

  #ad-overlay .play-icon {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8em;
    height: 8em;
    border-radius: 50%;
    background: rgba(3, 3, 3, .6);
    border: .3em solid #f2f5f8;
  }

  #ad-overlay .play-icon-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(100% 50%, 16% 0, 16% 100%);
    background-color: #f2f5f8;
    width: 40%;
    height: 40%;
  }
  `
  var ref = document.getElementsByTagName('head')[0]
  ref.parentNode.insertBefore(style, ref)
}

