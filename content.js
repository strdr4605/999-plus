chrome.storage.sync.get("autoSortAsc", data => {
  if (data.autoSortAsc) {
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
        const [itemsWithPrice, itemsWithoutPrice] = items.reduce(
          (acc, el) => {
            acc[!isNaN(el.price) && isFinite(el.price) ? "0" : "1"].push(el);
            return acc;
          },
          [[], []]
        );
        itemsWithPrice.sort((a, b) => b.price - a.price);
        items = itemsWithPrice.concat(itemsWithoutPrice);
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
  }
});
