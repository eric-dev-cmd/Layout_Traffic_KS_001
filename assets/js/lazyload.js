const load = (img)=>{
  const url = img.getAttribute('data-src')
  img.setAttribute("src", url)
  img.removeAttribute('data-src')
}
document.addEventListener("DOMContentLoaded", function () {
  if ("IntersectionObserver" in window) {
    var lazyImages = document.querySelectorAll('[data-src]')
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
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
