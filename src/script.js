// check if info was read by teacher
const infoTeacher = document.querySelector("#info-teacher");
if (localStorage.getItem("infoReadByTeacher") !== "true") {
  infoTeacher.classList.remove("hidden");
  infoTeacher.classList.add("flex");
  document.body.classList.add("overflow-y-hidden");

  infoTeacher.querySelector("input").addEventListener("change", () => {
    const inputStatus = infoTeacher.querySelector("input").value;
    console.log(inputStatus === "on");
    if (inputStatus === "on") {
      localStorage.setItem("infoReadByTeacher", "true");
      location.reload();
    }
  });
} else {
  console.log("Info was read by teacher");
}

// BURGER MENU

document.querySelector(".burger-menu").addEventListener("click", () => {
  document.querySelector("#search-nav").classList.toggle("active");
});

// GETTING DATA

// title, rating, price,
function createArrivalItem(item, parentElement) {
  const arrivalItem = document.createElement("div");

  // Set image source to use default image if no image is provided
  const imgSrc = item.image || "../src/assets/imgs/test.png";

  let starRatingElement = [];

  for (let i = 0; i < Math.floor(item.rating.rate); i++) {
    starRatingElement.push(
      '<img src="../src/assets/imgs/fullstar.svg" alt="" />',
    );
  }

  if (item.rating.rate % 1 >= 0.5) {
    starRatingElement.push(
      '<img src="../src/assets/imgs/halfstar.svg" alt="" />',
    );
  }

  arrivalItem.innerHTML = `
    <div class="w-[200px] md:w-[296px] cursor-pointer">
      <div class="h-[200px] md:h-[298px] w-full bg-creamyGray rounded-default">
        <img src="${imgSrc}" alt="" class="w-full h-full object-contain rounded-default" />
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <p class="font-bold text-black text-ellipsis text-nowrap overflow-hidden">${
          item.title || "T-shirt with Tape Details"
        }</p>
        
        <!-- Rating component -->
        <div class="flex flex-row gap-[11px] items-center">
          <div class="flex flex-row gap-[5px] h-[18px]">
            ${starRatingElement.join("")}
          </div>
          <p class="text-sm"><span class="text-black text-sm">${
            item.rating.rate || 0
          }</span>/5</p>
        </div>
        
        <!-- Price component -->
        <p class="font-bold text-xl md:text-2xl text-black">${
          item.price || 120
        }$</p>
      </div>
    </div>
  `;

  arrivalItem.addEventListener("click", () => {
    window.location.href = `/product/${item.id}`;
  });

  parentElement.appendChild(arrivalItem);
}

// FORMAT

// {
// 	id:5,
// 	title:'...',
// 	price:'...',
// 	category:'...',
// 	description:'...',
// 	image:'...'
// }

async function fetchResults() {
  const response = await fetch("https://fakestoreapi.com/products?limit=8");
  const data = await response.json();
  return data;
}

const arrivalList2 = document.querySelector("#arrival2.arrival-list");
const arrivalList1Parent = document.querySelector("div:has(#arrival1)");
const arrivalList1 = document.querySelector("#arrival1.arrival-list");

function splitResults(results) {
  if (results.length > 4) {
    arrivalList1Parent.classList.remove("hidden");

    results.slice(0, 4).forEach((item) => {
      createArrivalItem(item, arrivalList1);
    });
    results.slice(4, results.length).forEach((item) => {
      createArrivalItem(item, arrivalList2);
    });
  } else {
    results.forEach((item) => {
      createArrivalItem(item, arrivalList2);
    });
    arrivalList1Parent.classList.add("hidden");
  }
}

let firstData = [];
let filteredData = [];

async function initialFetch() {
  firstData = await fetchResults();
  filteredData = firstData;
  splitResults(firstData);
}

initialFetch();

// Searching and Filtering Products
const form = document.getElementById("searchForm");
1;
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const searchBar = document.getElementById("search-bar");
  const searchTerm = searchBar.value;

  if (searchTerm.trim() === "") {
    filteredData = firstData;
    splitResults(filteredData);
    return;
  }
  console.log("Search term:", searchTerm);

  filteredData = firstData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  arrivalList1.innerHTML = "";
  arrivalList2.innerHTML = "";
  console.log(filteredData);

  splitResults(filteredData);
});

// Select the parent element where the components will be appended
const reviewSection = document.querySelector(".reviewSection");
const scrollLeft = document.querySelector("#scroll-left");
const scrollRight = document.querySelector("#scroll-right");

scrollLeft.addEventListener("click", function () {
  const reviewSectionWith = reviewSection.clientWidth + 20;
  reviewSection.scrollLeft -= reviewSectionWith;
});

scrollRight.addEventListener("click", function () {
  const reviewSectionWith = reviewSection.clientWidth + 20;
  reviewSection.scrollLeft += reviewSectionWith;
});

function createReviewComponent(name, reviewText) {
  const componentHTML = `
	<div
		class="p-6 lg:px-8 lg:py-7 rounded-default border-solid border-1 border-black/10 flex-shrink-0 flex flex-col items-start w-full lg:w-[calc(100%/3.1)]">
		<div class="flex flex-row gap-[6.5px] h-[18px]">
			<img src="../src/assets/imgs/fullstar.svg" alt="" />
			<img src="../src/assets/imgs/fullstar.svg" alt="" />
			<img src="../src/assets/imgs/fullstar.svg" alt="" />
			<img src="../src/assets/imgs/fullstar.svg" alt="" />
			<img src="../src/assets/imgs/fullstar.svg" alt="" />
		</div>
		<div class="flex flex-row items-center justify-start gap-1 mt-3 lg:mt-[15px]">
			<p class="font-bold text-[20px]">${name}</p>
			<img src="../src/assets/imgs/checkMark.svg" class="w-7 h-7" alt="" />
		</div>
		<p class="mt-2 lg:mt-3 text-black/60">"${reviewText}”
		</p>
	</div>
	`;
  reviewSection.insertAdjacentHTML("beforeend", componentHTML);
}

const comments = [
  {
    name: "Sarah M.",
    reviewText: `I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`,
  },
  {
    name: "Alex K.",
    reviewText: `As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.`,
  },
  {
    name: "James L.",
    reviewText: `Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.`,
  },
];
[...comments, ...comments].forEach((comment) => {
  createReviewComponent(comment.name, comment.reviewText);
});

const infoFooter = document.querySelector(".info-footer");

function createInfoComponent(title, listOfLinks) {
  const infoComponent = document.createElement("div");

  if (listOfLinks.length === 4) {
    infoComponent.innerHTML = `
							<div class="flex flex-col gap-4 lg:gap-[26px]">
								<h6 class="font-medium">${title}</h6>
								<div class="flex flex-col justify-between gap-4 h-full">
								${listOfLinks
                  .map((link) => {
                    return `<a href="${link}" target="_blank">${link}</a>`;
                  })
                  .join("")}
								</div>
							</div>
							`;
  }

  infoFooter.appendChild(infoComponent);
}

createInfoComponent("Company", [
  "About Us",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
]);
createInfoComponent("Company", [
  "About Us",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
]);
createInfoComponent("Company", [
  "About Us",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
]);
createInfoComponent("Company", [
  "About Us",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
]);
