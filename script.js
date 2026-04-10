let cart = [];

function addToCart(nama, harga) {
  cart.push({ nama, harga });
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let list = "";
  let total = 0;

  cart.forEach((item, index) => {
    list += `
      <li>
        ${item.nama} - Rp${item.harga}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
    total += item.harga;
  });

  document.getElementById("cart-items").innerHTML = list;
  document.getElementById("cart-total").innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.querySelector(".cart-content").classList.add("active");
}

function closeCart() {
  document.querySelector(".cart-content").classList.remove("active");
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo, saya ingin pesan:\n\n";

  cart.forEach(item => {
    pesan += `- ${item.nama} (Rp${item.harga})\n`;
  });

  let total = cart.reduce((sum, item) => sum + item.harga, 0);
  pesan += `\nTotal: Rp${total}`;

  let url = "https://wa.me/6285640393467?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}let links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});