function show_page(clicked_button, parentElement) {
  let pages = document.getElementsByClassName("main-component");
  document.getElementById("active").removeAttribute("id", "active");
  for (let i = 0; i < pages.length; i++) {
    if (clicked_button.includes(pages[i].id)) {
      pages[i].style.display = "flex";
      parentElement.setAttribute("id", "active");
    } else {
      pages[i].style.display = "none";
    }
  }
  return false;
}
