(function() {
  const list = document.querySelectorAll("ul.ads-list-photo")[0];

  const getPrice = str => parseInt(str.replace(/\s/g, ""));

  const removeBoosters = list => {
    let itemsWithBooster = Array.from(list.children)
      .map((item, index) => ({ index, item }))
      .filter(obj => !!obj.item.querySelectorAll(".booster-label").length);

    while (!!itemsWithBooster.length) {
      for (const item of itemsWithBooster) {
        list.removeChild(list.childNodes[item.index]);
      }

      itemsWithBooster = Array.from(list.children)
        .map((item, index) => ({ index, item }))
        .filter(obj => !!obj.item.querySelectorAll(".booster-label").length);
    }
  };

  removeBoosters(list);
})();
