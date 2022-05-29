const burger = document.querySelector(".header__burger");
const cross = document.querySelector(".side_menu__cross");
const sideMenu = document.querySelector(".side_menu");

const teamSliderControl = document.querySelector(".team__control_item");
const teamMembersSlider = document.querySelector(".team__members").children;

const reviewSliderControl = document.querySelector(".review__control_item");
const reviewMembersSlider = document.querySelector(".review__members").children;

burger.addEventListener("click", () => {
  sideMenu.style.visibility = "visible";
  sideMenu.style.transform = "translateX(0vw)";
});
cross.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(-100vw)";
  setTimeout(() => {
    sideMenu.style.visibility = "hidden";
  }, 500);
});

teamSliderControl.addEventListener("click", () => {
  slideChange(teamMembersSlider);
});

reviewSliderControl.addEventListener("click", () => {
  slideChange(reviewMembersSlider);
});

function slideChange(slider) {
  let index = [...slider].findIndex((item) =>
    item.classList.contains("active")
  );
  if (index >= 3) {
    index = -1;
  }
  index++;
  if (window.innerWidth < 768) {
    const activeItem = slider[index - 1].children[0];
    const backgroundString =
      document.defaultView.getComputedStyle(activeItem).background;
    const fileName = "/image/team_";
    const indexOfFileName = backgroundString.indexOf(fileName);
    let numberOfFile = +backgroundString.slice(
      indexOfFileName + fileName.length,
      indexOfFileName + fileName.length + 1
    );
    if (numberOfFile >= 4) {
      numberOfFile = 0;
    }
    activeItem.style.background = `url("./image/team_${
      numberOfFile + 1
    }.png") no-repeat`;
    activeItem.style.backgroundSize = "100%";
  } else {
    setActiveClassOnSliderItem(slider, index);
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    setActiveClassOnSliderItem(teamMembersSlider, 0);
    setActiveClassOnSliderItem(reviewMembersSlider, 0);
  }
});

function setActiveClassOnSliderItem(slider, index) {
  [...slider].forEach((item, itemIndex) => {
    if (itemIndex === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
