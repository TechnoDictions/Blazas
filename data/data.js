async function loadProducts() {
  const res = await fetch("data/products.json");
  const data = await res.json();

  const container = document.querySelector(".prs-container");
  container.innerHTML = ""; 

  const params = new URLSearchParams(window.location.search);
  const query = params.get("search")?.toLowerCase() || "";

  const filtered = query
    ? data.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      )
    : data;

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<h3>Found ${filtered.length} product(s)</h3>`;

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("prs");

    card.innerHTML = `
     <a href="product.html?id=${product.id}" class="product-link">
      <div class="prs-img">
        <div class="loader"></div>
        <img src="${product.image}" alt="${product.name}" 
             onload="this.style.display='block'; this.previousElementSibling.style.display='none';">
      </div>
      <div class="prs-p">
        <p>${product.name}</p>
        <p>PKR : ${product.price}</p>
      </div>
      </a>
    `;

    container.appendChild(card);
  });
}

loadProducts();
const filtered = query
  ? data.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    )
  : data;
/*
============
price filter
============
*/
const minSlider = document.getElementById("min-slider");
const maxSlider = document.getElementById("max-slider");
const minValueInput = document.getElementById("min-value");
const maxValueInput = document.getElementById("max-value");
const sliderTrack = document.getElementById("slider-track");
const applyBtn = document.querySelector(".apply-btn");

const minGap = 100; // minimum difference between sliders
const sliderMax = parseInt(maxSlider.max);

// Update slider track color
function fillColor() {
  let percent1 = (minSlider.value / sliderMax) * 100;
  let percent2 = (maxSlider.value / sliderMax) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #d7dcdf ${percent1}%, #3f51b5 ${percent1}%, #3f51b5 ${percent2}%, #d7dcdf ${percent2}%)`;
}

// Handle min slider movement
minSlider.addEventListener("input", () => {
  if (parseInt(maxSlider.value) - parseInt(minSlider.value) <= minGap) {
    minSlider.value = parseInt(maxSlider.value) - minGap;
  }
  minValueInput.value = minSlider.value;
  fillColor();
});

// Handle max slider movement
maxSlider.addEventListener("input", () => {
  if (parseInt(maxSlider.value) - parseInt(minSlider.value) <= minGap) {
    maxSlider.value = parseInt(minSlider.value) + minGap;
  }
  maxValueInput.value = maxSlider.value;
  fillColor();
});

// Update sliders if text inputs change
minValueInput.addEventListener("change", () => {
  let val = parseInt(minValueInput.value.replace(/,/g, "")) || minSlider.min;
  if (val < minSlider.min) val = minSlider.min;
  if (val > maxSlider.value - minGap) val = maxSlider.value - minGap;
  minSlider.value = val;
  minValueInput.value = val;
  fillColor();
});

maxValueInput.addEventListener("change", () => {
  let val = parseInt(maxValueInput.value.replace(/,/g, "")) || maxSlider.max;
  if (val > maxSlider.max) val = maxSlider.max;
  if (val < parseInt(minSlider.value) + minGap) val = parseInt(minSlider.value) + minGap;
  maxSlider.value = val;
  maxValueInput.value = val;
  fillColor();
});

// Apply button filter (replace renderProducts with your own function)
applyBtn.addEventListener("click", () => {
  const min = parseInt(minSlider.value);
  const max = parseInt(maxSlider.value);

  console.log("Filtering products between:", min, "and", max);

  // Example: filter loaded products
  if (typeof products !== "undefined") {
    const filtered = products.filter(p => p.price >= min && p.price <= max);
    renderProducts(filtered);
  }
});

// Initialize color on page load
fillColor();


maxValueInput.addEventListener("change", () => {
  let val = parseInt(maxValueInput.value.replace(/,/g, "")) || 5000;
  if (val > 5000) val = 5000;
  if (val < parseInt(minSlider.value) + minGap) val = parseInt(minSlider.value) + minGap;
  maxSlider.value = val;
  maxValueInput.value = val;
  fillColor();
});

applyBtn.addEventListener("click", () => {
  const min = parseInt(minSlider.value);
  const max = parseInt(maxSlider.value);

  console.log("Filter products between:", min, "and", max);

  const filtered = products.filter(p => p.price >= min && p.price <= max);
  renderProducts(filtered);
});

fillColor();
