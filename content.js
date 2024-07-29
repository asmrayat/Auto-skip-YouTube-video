function skipAd() {
  const skipButton = document.querySelector(".ytp-skip-ad-button");

  if (skipButton) {
    skipButton.click();
  }
}

setInterval(skipAd, 1000);
