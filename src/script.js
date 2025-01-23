const arrivalList2 = document.querySelector("#arrival2.arrival-list");
const arrivalList1 = document.querySelector("#arrival1.arrival-list");

// title, rating, price, discount = false
function createArrivalItem(element) {
	const arrivalItem = document.createElement("div");

	arrivalItem.innerHTML = `
												<div class="w-[200px] md:w-[296px]">
													<div class="h-[200px] md:h-[298px] w-full bg-creamyGray rounded-default">
														<img src="../src/assets/imgs/test.png" alt="" class="w-full h-full object-cover rounded-default" />
													</div>
													<div class="mt-4 flex flex-col gap-2">
														<p class="font-bold text-black">T-shirt with Tape Details</p>
														<div class="flex flex-row gap-[11px] items-center">
															<div class="flex flex-row gap-[5px] h-[18px]">
																<img src="../src/assets/imgs/fullstar.svg" alt="" />
																<img src="../src/assets/imgs/fullstar.svg" alt="" />
																<img src="../src/assets/imgs/fullstar.svg" alt="" />
																<img src="../src/assets/imgs/fullstar.svg" alt="" />
																<img src="../src/assets/imgs/halfstar.svg" alt="" />
															</div>
															<p class="text-sm">4.5/5</p>
														</div>
														<p class="font-bold text-xl md:text-2xl text-black">$120</p>
													</div>
												</div>
												`;
	element.appendChild(arrivalItem);
}

createArrivalItem(arrivalList2);
createArrivalItem(arrivalList2);
createArrivalItem(arrivalList2);
createArrivalItem(arrivalList2);
createArrivalItem(arrivalList1);
createArrivalItem(arrivalList1);
createArrivalItem(arrivalList1);
createArrivalItem(arrivalList1);

// Select the parent element where the components will be appended
const reviewSection = document.querySelector(".reviewSection");
console.log(reviewSection);

// Define the component HTML as a string
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
							<div class="flex flex-col gap-[26px]">
								<h6>${title}</h6>
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
