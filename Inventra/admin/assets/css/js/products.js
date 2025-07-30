const products = [
    {
      name: "ChatGPT Plus 1 Month",
      price: "EGP 350",
      description: "Duration: 1 month subscription. Instant delivery.",
      image: "assets/images/chatgpt.png",
      link: "checkout.html"
    },
    {
      name: "Netflix Premium Personal 1 Month",
      price: "EGP 250",
      description: "4K UHD Premium Account - 1 month",
      image: "assets/images/netflix.png",
      link: "checkout.html"
    },
    {
      name: "Netflix Premium Shared 12 Months",
      price: "EGP 1200",
      description: "Shared UHD Premium Account - 12 months",
      image: "assets/images/netflix.png",
      link: "checkout.html"
    }
  ];
  
  const grid = document.getElementById("product-grid");
  if(grid){
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-lg rounded-lg p-4";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="h-40 mx-auto">
        <h4 class="text-lg font-semibold mt-4">${p.name}</h4>
        <p class="text-gray-600">${p.description}</p>
        <p class="text-indigo-600 font-bold mt-2">${p.price}</p>
        <a href="${p.link}" class="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Buy Now</a>
      `;
      grid.appendChild(card);
    });
  }
  