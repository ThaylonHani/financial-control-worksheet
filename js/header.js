const menu = $("#menu");
const hamburger = menu.find("span");
const nav = $("#navigation");

$(() => {
  handleMenu();
  handleClickOnMenu();
});

function handleMenu() {
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

function handleClickOnMenu() {
  $(".about").click(function (event) {
    // event.preventDefault();
    nav.toggleClass("opened");
    if (hamburger.text() == "close") {
      hamburger.text("menu");
    } else {
      hamburger.text("close");
    }
  });
  $(".expense-table , .revenue-table").click(function (event) {
    // event.preventDefault();
    nav.toggleClass("opened");
    if (hamburger.text() == "close") {
      hamburger.text("menu");
    } else {
      hamburger.text("close");
    }
  });
}
