document.querySelectorAll(".thumbnail-item").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    document.querySelectorAll(".thumbnail-item").forEach((item) => {
      item.classList.remove("active");
    });

    // ADDING 'ACTIVE' CLASS TO CLICKED THUMBNAIL
    thumbnail.classList.add("active");

    // UPDATE MAIN VIDEO IFRAME
    const videoSrc = thumbnail.getAttribute("data-video-src");
    const videoTitle = thumbnail.getAttribute("data-title");

    document.getElementById("main-video-player").src = videoSrc;
    document.querySelector(".main-video-title").textContent = videoTitle;
  });
});
