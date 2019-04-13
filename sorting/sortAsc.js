(function() {
  const list = document.querySelectorAll("ul.ads-list-photo")[0];

  const getPrice = str => {
    const currencies = {
      MDL: 1,
      $: 18,
      "€": 20
    };
    const noSpaceStr = str.replace(/\s/g, "");
    const currency = noSpaceStr.match(/MDL|\$|€/g)
      ? noSpaceStr.match(/MDL|\$|€/g)[0]
      : "MDL";
    return parseInt(noSpaceStr) * (currencies[currency] || 1);
  };

  const styleItems = (elements, items) => {
    items.sort((a, b) => b.price - a.price);
    items.forEach((item, index) => {
      elements[item.index].setAttribute("style", `order: ${index};`);
    });
  };

  list.setAttribute("style", `display: flex;`);
  const items = Array.from(list.children).map((item, index) => ({
    index,
    price: !!item.querySelectorAll(".ads-list-photo-item-price").length
      ? getPrice(
          item.querySelectorAll(".ads-list-photo-item-price")[0].innerText
        )
      : -Infinity
  }));

  styleItems(list.children, items);
})();
