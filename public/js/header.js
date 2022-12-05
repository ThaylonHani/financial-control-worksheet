$(() => {
  handleMenu();
});

function handleMenu() {
  const menu = $("#menu");
  const hamburger = menu.find("span");
  const nav = $("#navigation");
  menu.click(function (event) {
    event.preventDefault();
    nav.toggleClass("opened");
    if (hamburger.text() == "close") {
      hamburger.text("menu");
    } else {
      hamburger.text("close");
    }
  });
}






