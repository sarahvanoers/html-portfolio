document.querySelectorAll("[data-painting-id]").forEach(el => {
  const id = el.getAttribute("data-painting-id");
  const painting = paintings[id];
  if (painting) {
    el.querySelector(".painting-title").textContent = painting.title + ", " + painting.year + " →";
    el.querySelector("img").alt = painting.title + " by Guy Van Oers";
    el.querySelector("img").src = "assets/" + id + "_detail.jpg";
  }
});
