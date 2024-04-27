//your code here
// Function to calculate total price
function calculateTotal() {
  let prices = document.querySelectorAll('[data-ns-test="prices"]');
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });
  return total.toFixed(2);
}

// Function to update total price in the table
function updateTotal() {
  let grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotal.textContent = calculateTotal();
}

// Initial update
updateTotal();

// Event listener for changes in table
document.getElementById('grocery-list').addEventListener('input', updateTotal);