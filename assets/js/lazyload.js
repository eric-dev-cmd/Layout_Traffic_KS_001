const load = (img)=>{
  const url = img.getAttribute('data-src')
  console.log("url", url)
  img.setAttribute("src", url)
  img.removeAttribute('data-src')
}
document.addEventListener("DOMContentLoaded", function () {
  if ("IntersectionObserver" in window) {
    var lazyImages = document.querySelectorAll('[data-src]')
    console.log("lazyImages", lazyImages);
    lazyImages.forEach(img=>{
      console.log("img", img)
    })
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        console.log("entry.isIntersecting", entry.isIntersecting)
        if (entry.isIntersecting) {
          load(entry.target)
          observer.unobserve(entry.target);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
