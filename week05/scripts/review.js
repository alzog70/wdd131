// Populate Product Dropdown
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" },
  ];
  
  const productSelect = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
 
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  
  
function updateReviewCounter() {
    
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    reviewCount++;

    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('review-counter').textContent = reviewCount;
}
updateReviewCounter();
