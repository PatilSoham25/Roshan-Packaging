// Get product ID from URL parameters
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Load product details
function loadProductDetails() {
  const productId = getProductId();

  if (!productId || !products[productId]) {
    document.body.innerHTML =
      '<div style="padding: 40px; text-align: center;"><h2>Product not found</h2><a href="products.html">Back to Products</a></div>';
    return;
  }

  const product = products[productId];

  // Update page title
  document.title = `${product.name} | Roshan Packaging`;

  // Set product name
  document.getElementById("product-name").textContent = product.name;

  // Set product type (subtitle below title)
  document.getElementById("product-type").textContent = product.type;

  // Set main product image
  const mainImg = document.getElementById("product-image");
  mainImg.src = product.image;
  mainImg.alt = product.name;

  // ----- USAGE IMAGE SECTION -----
  const usageImg = document.getElementById("product-image-usage");

if (usageImg) {
  usageImg.src = product.usage_image ;
}

/// APPLICATIONS (Dynamic)
const appList = document.getElementById("application-list");
const appSection = document.querySelector(".np-applications");
const descBox = document.getElementById("product-description");
appList.innerHTML = "";

if (product.applications && product.applications.length > 0) {
  product.applications.forEach(app => {
    const li = document.createElement("li");
    li.textContent = app;
    appList.appendChild(li);
  });

  appSection.style.display = "block";
  descBox.style.textAlign = "left";

  // reset wrapper if previously centered
  descBox.parentElement.style.display = "";
  descBox.parentElement.style.alignItems = "";
  descBox.parentElement.style.flexDirection = "";
} else {
  appSection.style.display = "none";

  // center description text
  descBox.style.textAlign = "center";

  // center entire description column
  const descWrapper = descBox.parentElement; // .np-description
  descWrapper.style.margin = "0 auto";
  descWrapper.style.textAlign = "center";
  descWrapper.style.width = "100%";

  // make grid single-column so description truly centers
  const grid = document.querySelector(".np-details-grid");
  grid.style.gridTemplateColumns = "1fr";
  grid.style.textAlign = "center";
}



  // Set product description
  document.getElementById("product-description").textContent =
    product.description;

  // Set features list
  const featuresList = document.getElementById("product-features");
  featuresList.innerHTML = "";

  product.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Setup "Yes I'm Interested" button
  const interestedBtn = document.getElementById("interested-btn");
  interestedBtn.addEventListener("click", () => {
    window.location.href =
      "contact.html?product=" + encodeURIComponent(product.name);
  });
}

// LOAD PRODUCT WHEN PAGE IS READY
document.addEventListener("DOMContentLoaded", loadProductDetails);