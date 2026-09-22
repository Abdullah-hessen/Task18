// Create Function
function createRecord() {
  const productInfo = {
    productName: productName.value,
    productPrice: +productPrice.value,
  };

  products.push(productInfo);
  localStorage.setItem("products", JSON.stringify(products));
  clearRecord();
  showRecord();
}

// Clear Inputs Function
function clearRecord() {
  productName.value = "";
  productPrice.value = "";
}

// Show Function
function showRecord() {
  tableBody.innerHTML = "";
  products.forEach((item, index) => {
    tableBody.innerHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${item.productName}</td>
              <td>${item.productPrice}</td>
              <td>
                <svg onclick="editRecord(${index})" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
	                <path d="M0 0h24v24H0z" fill="none" />
	                <path fill="currentColor" d="M5 21h14c1.1 0 2-.9 2-2v-8h-2v8H5V5h8V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2" />
	                <path fill="currentColor" d="M7 14v2c0 .55.45 1 1 1h2c.27 0 .52-.11.71-.29l7.65-7.65l-3.41-3.41L7.3 13.3a1 1 0 0 0-.29.71Zm13.71-7.29a.996.996 0 0 0 0-1.41l-2-2a.996.996 0 0 0-1.41 0l-1.65 1.65l3.41 3.41z" />
                </svg>
                <svg onclick="deleteRecord(${index})" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 576 512">
	                <path d="M0 0h576v512H0z" fill="none" />
	                <path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64zm-305 47c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9" />
                </svg>
              </td>
            </tr>
        `;
  });
}
// Edit Function
function editRecord(index) {
  productName.value = products[index].productName;
  productPrice.value = products[index].productPrice;
  formBtn.textContent = "Update";

  updateIndex = index;
}

// Update Function
function updateRecord() {
  const product = {
    productName: productName.value,
    productPrice: +productPrice.value,
  };
  products.splice(updateIndex, 1, product);
  localStorage.setItem("products", JSON.stringify(products));
  showRecord();
  clearRecord();
  formBtn.textContent = "Create";
}

// Delete Function
function deleteRecord(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  showRecord();
}

// Vars
const products = [];
let updateIndex = "null";

// Select
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const formBtn = document.querySelector(".formBtn");
const tableBody = document.querySelector(".tableBody");

// Events
formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (formBtn.textContent.trim() == "Create") {
    createRecord();
  } else {
    updateRecord();
  }
});
