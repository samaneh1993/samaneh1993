const typeTextSpan = document.querySelector(".typed");
const cursorSpan = document.querySelector(".typed-cursor");
const textArray = ["developer", "designer"];
const typeingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let i = 0;
let c = 0;

function type() {
  if (c < textArray[i].length) {
    if (!cursorSpan.classList.contains("typed-off"))
      cursorSpan.classList.add("typed-off");
    typeTextSpan.textContent += textArray[i].charAt(c);
    c++;
    setTimeout(type, typeingDelay);
  } else {
    cursorSpan.classList.remove("typed-off");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (c > 0) {
    if (!cursorSpan.classList.contains("typed-off"))
      cursorSpan.classList.add("typed-off");
    typeTextSpan.textContent = textArray[i].substring(0, c - 1);
    c--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typed-off");
    i++;
    if (i >= textArray.length) i = 0;
    setTimeout(type, typeingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const headerMenu = document.getElementById("header-colaps");
const headerBox = document.querySelector(".box-left-header");

///menuButton

headerMenu.addEventListener("click", function (e) {
  headerBox.classList.add("active");
  // if (textArray.length) setInterval(type, newTextDelay + 250);

  i++;
  if (i % 2 === 0) {
    headerMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    headerBox.classList.remove("active");

    return;
  }
  headerMenu.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color:#eb9486"></i>`;
});

////////////////////////////////
const menuPoroject = [
  {
    id: 1,
    category: "css",
    img: "photo/item1.JPG",
  },
  {
    id: 2,

    category: "css",
    img: "photo/item2.JPG",
  },
  {
    id: 3,
    category: "javascript",
    img: "photo/item3.JPG",
  },
  {
    id: 4,
    category: "bootstarp",
    img: "photo/item4.JPG",
  },

  {
    id: 5,
    category: "bootstarp",
    img: "photo/item5.JPG",
  },
  {
    id: 6,
    category: "bootstarp",
    img: "photo/item6.JPG",
  },
  {
    id: 7,
    category: "bootstarp",
    img: "photo/item7.JPG",
  },
  {
    id: 8,
    category: "bootstarp",
    img: "photo/item11.JPG",
  },

  {
    id: 9,
    category: "scss",
    img: "photo/item9.JPG",
  },
  {
    id: 10,
    category: "scss",
    img: "photo/item10.JPG",
  },
];

function actionTheBOTTON(item) {
  document.querySelectorAll(".p-title").forEach(function (btn) {
    btn.classList.remove("action");
  });

  if (item) {
    item.classList.add("action");
  }
}

function setButtonCategory() {
  const categoryMenu = document.getElementById("title-link-portfolio");
  let categories = ["all"];
  menuPoroject.forEach(function (item) {
    if (item && item.category && !categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  console.log(categories);
  const button = categories.map(function (category) {
    // const classList = category === "all" ? "p-title actoin" : "p-title";
    return ` <button   class="p-title" data-id=${category}>${category}</button>`;
  });
  categoryMenu.innerHTML = button.join("");

  document.querySelectorAll(".p-title").forEach(function (item) {
    const categoryType = item.getAttribute("data-id");
    item.addEventListener("click", function () {
      actionTheBOTTON(item);
      if (categoryType === "all") {
        displayProject(menuPoroject);
        return;
      }
      const filterMenu = menuPoroject.filter(function (item) {
        return item.category === categoryType;
      });
      displayProject(filterMenu);
    });
  });
}

////functon sakht img

function displayProject(items) {
  const projectWrapper = document.getElementById("wrapper-box");
  if (items) {
    projectWrapper.innerHTML = items
      .map(function (item) {
        return `<div class="wrap-img  wow animate__animated animate__fadeInTopRight  animate__delay-2.5s" >
        <img  class="img-fluid"  src=${item.img}>
        <div class="page-white">
          <div class="white-title" >
            <h4>web3</h4>
            <p>web</p>
            <div class="link-white">
              <a href="https://samaneh1993.neocities.org/"><i class="fa-solid fa-plus"></i></a>
              <a href="https://samaneh1993.neocities.org/"><i class="fa-solid fa-link"></i></a>
            </div>
          </div>
        </div>
      </div> `;
      })
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setButtonCategory();
  displayProject(menuPoroject);
});
