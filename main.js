async function getProducts() {
  const container = document.getElementById("products");
  try {
    const response = await fetch('https://dummyjson.com/products').then(res => res.json());
    console.log(response);
    console.log(response.products);
    console.log(response.products[0]);
    console.log(response.products[0].title);
    container.innerHTML = 
    `<div class="card">
  <img src="${response.products[0].thumbnail}" width="300">
  <pre>${response.products[0].title}</pre>
  <pre>${response.products[0].description}</pre>
  <pre>${response.products[0].category}</pre>
  <pre class="price">${response.products[0].price}</pre>
</div>

<div class="card">
  <img src="${response.products[1].thumbnail}" width="300">
  <pre>${response.products[1].title}</pre>
  <pre>${response.products[1].description}</pre>
  <pre>${response.products[1].category}</pre>
<pre class="price">${response.products[1].price}</pre>
</div>

<div class="card">
  <img src="${response.products[2].thumbnail}" width="300">
  <pre>${response.products[2].title}</pre>
  <pre>${response.products[2].description}</pre>
  <pre>${response.products[2].category}</pre>
  <pre class="price">${response.products[2].price}</pre>
</div>

<div class="card">
  <img src="${response.products[3].thumbnail}" width="300">
  <pre>${response.products[3].title}</pre>
  <pre>${response.products[3].description}</pre>
  <pre>${response.products[3].category}</pre>
  <pre class="price">${response.products[3].price}</pre>
</div>

<div class="card">
  <img src="${response.products[4].thumbnail}" width="300">
  <pre>${response.products[4].title}</pre>
  <pre>${response.products[4].description}</pre>
  <pre>${response.products[4].category}</pre>
 <pre class="price">${response.products[4].price}</pre>
</div>

<div class="card">
  <img src="${response.products[5].thumbnail}" width="300">
  <pre>${response.products[5].title}</pre>
  <pre>${response.products[5].description}</pre>
  <pre>${response.products[5].category}</pre>
  <pre class="price">${response.products[5].price}</pre>
</div>

<div class="card">
  <img src="${response.products[6].thumbnail}" width="300">
  <pre>${response.products[6].title}</pre>
  <pre>${response.products[6].description}</pre>
  <pre>${response.products[6].category}</pre>
  <pre class="price">${response.products[6].price}</pre>
</div>

<div class="card">
  <img src="${response.products[7].thumbnail}" width="300">
  <pre>${response.products[7].title}</pre>
  <pre>${response.products[7].description}</pre>
  <pre>${response.products[7].category}</pre>
 <pre class="price">${response.products[7].price}</pre>
</div>

<div class="card">
  <img src="${response.products[8].thumbnail}" width="300">
  <pre>${response.products[8].title}</pre>
  <pre>${response.products[8].description}</pre>
  <pre>${response.products[8].category}</pre>
  <pre class="price">${response.products[8].price}</pre>
</div>

<div class="card">
  <img src="${response.products[9].thumbnail}" width="300">
  <pre>${response.products[9].title}</pre>
  <pre>${response.products[9].description}</pre>
  <pre>${response.products[9].category}</pre>
  <pre class="price">${response.products[9].price}</pre>
</div>

<div class="card">
  <img src="${response.products[10].thumbnail}" width="300">
  <pre>${response.products[10].title}</pre>
  <pre>${response.products[10].description}</pre>
  <pre>${response.products[10].category}</pre>
  <pre class="price">${response.products[10].price}</pre>
</div>

<div class="card">
  <img src="${response.products[11].thumbnail}" width="300">
  <pre>${response.products[11].title}</pre>
  <pre>${response.products[11].description}</pre>
  <pre>${response.products[11].category}</pre>
<pre class="price">${response.products[11].price}</pre>
</div>

<div class="card">
  <img src="${response.products[12].thumbnail}" width="300">
  <pre>${response.products[12].title}</pre>
  <pre>${response.products[12].description}</pre>
  <pre>${response.products[12].category}</pre>
 <pre class="price">${response.products[12].price}</pre>
</div>

<div class="card">
  <img src="${response.products[13].thumbnail}" width="300">
  <pre>${response.products[13].title}</pre>
  <pre>${response.products[13].description}</pre>
  <pre>${response.products[13].category}</pre>
<pre class="price">${response.products[13].price}</pre>
</div>

<div class="card">
  <img src="${response.products[14].thumbnail}" width="300">
  <pre>${response.products[14].title}</pre>
  <pre>${response.products[14].description}</pre>
  <pre>${response.products[14].category}</pre>
  <pre class="price">${response.products[14].price}</pre>
</div>

<div class="card">
  <img src="${response.products[15].thumbnail}" width="300">
  <pre>${response.products[15].title}</pre>
  <pre>${response.products[15].description}</pre>
  <pre>${response.products[15].category}</pre>
 <pre class="price">${response.products[15].price}</pre>
</div>

<div class="card">
  <img src="${response.products[16].thumbnail}" width="300">
  <pre>${response.products[16].title}</pre>
  <pre>${response.products[16].description}</pre>
  <pre>${response.products[16].category}</pre>
  <pre class="price">${response.products[16].price}</pre>
</div>

<div class="card">
  <img src="${response.products[17].thumbnail}" width="300">
  <pre>${response.products[17].title}</pre>
  <pre>${response.products[17].description}</pre>
  <pre>${response.products[17].category}</pre>
  <pre class="price">${response.products[17].price}</pre>
</div>

<div class="card">
  <img src="${response.products[18].thumbnail}" width="300">
  <pre>${response.products[18].title}</pre>
  <pre>${response.products[18].description}</pre>
  <pre>${response.products[18].category}</pre>
<pre class="price">${response.products[18].price}</pre>
</div>

<div class="card">
  <img src="${response.products[19].thumbnail}" width="300">
  <pre>${response.products[19].title}</pre>
  <pre>${response.products[19].description}</pre>
  <pre>${response.products[19].category}</pre>
<pre class="price">${response.products[19].price}</pre>
</div>

<div class="card">
  <img src="${response.products[20].thumbnail}" width="300">
  <pre>${response.products[20].title}</pre>
  <pre>${response.products[20].description}</pre>
  <pre>${response.products[20].category}</pre>
  <pre class="price">${response.products[20].price}</pre>
</div>

<div class="card">
  <img src="${response.products[21].thumbnail}" width="300">
  <pre>${response.products[21].title}</pre>
  <pre>${response.products[21].description}</pre>
  <pre>${response.products[21].category}</pre>
  <pre class="price">${response.products[21].price}</pre>
</div>

<div class="card">
  <img src="${response.products[22].thumbnail}" width="300">
  <pre>${response.products[22].title}</pre>
  <pre>${response.products[22].description}</pre>
  <pre>${response.products[22].category}</pre>
  <pre class="price">${response.products[22].price}</pre>
</div>

<div class="card">
  <img src="${response.products[23].thumbnail}" width="300">
  <pre>${response.products[23].title}</pre>
  <pre>${response.products[23].description}</pre>
  <pre>${response.products[23].category}</pre>
 <pre class="price">${response.products[23].price}</pre>
</div>

<div class="card">
  <img src="${response.products[24].thumbnail}" width="300">
  <pre>${response.products[24].title}</pre>
  <pre>${response.products[24].description}</pre>
  <pre>${response.products[24].category}</pre>
  <pre class="price">${response.products[24].price}</pre>
</div>

<div class="card">
  <img src="${response.products[25].thumbnail}" width="300">
  <pre>${response.products[25].title}</pre>
  <pre>${response.products[25].description}</pre>
  <pre>${response.products[25].category}</pre>
<pre class="price">${response.products[25].price}</pre>
</div>

<div class="card">
  <img src="${response.products[26].thumbnail}" width="300">
  <pre>${response.products[26].title}</pre>
  <pre>${response.products[26].description}</pre>
  <pre>${response.products[26].category}</pre>
 <pre class="price">${response.products[26].price}</pre>
</div>

<div class="card">
  <img src="${response.products[27].thumbnail}" width="300">
  <pre>${response.products[27].title}</pre>
  <pre>${response.products[27].description}</pre>
  <pre>${response.products[27].category}</pre>
<pre class="price">${response.products[27].price}</pre>
</div>

<div class="card">
  <img src="${response.products[28].thumbnail}" width="300">
  <pre>${response.products[28].title}</pre>
  <pre>${response.products[28].description}</pre>
  <pre>${response.products[28].category}</pre>
<pre class="price">${response.products[28].price}</pre>
</div>

<div class="card">
  <img src="${response.products[29].thumbnail}" width="300">
  <pre>${response.products[29].title}</pre>
  <pre>${response.products[29].description}</pre>
  <pre>${response.products[29].category}</pre>
<pre class="price">${response.products[29].price}</pre>
</div>

    `;
  } catch (err) {
    console.log(err);
  }
}
getProducts();
