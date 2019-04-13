(function() {
  const list = document.querySelectorAll("ul.ads-list-photo")[0];

  const getPrice = str => parseInt(str.replace(/\s/g, ""));

  const styleItems = (elements, items) => {
    items.sort((a, b) => a.price - b.price);
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
