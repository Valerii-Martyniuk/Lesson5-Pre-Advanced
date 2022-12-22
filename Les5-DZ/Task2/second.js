function Market() {
  let bank = 1000;
  let beer = 100;
  let wine = 50;
  let pepsi = 80;
  let beerPrice = 25;
  let winePrice = 85;
  let pepsiPrise = 42;
  function sell(Wcount, Bcount, Pcount) {
    //Beer
    if (Bcount > beer) return console.log(`Not enough of beer bottles`);
    let Bprise = beerPrice * Bcount;
    bank += Bprise;
    beer -= Bcount;

    //Wine
    if (Wcount > wine) return console.log(`Not enough of wine bottles`);
    let Wprise = winePrice * Wcount;
    bank += Wprise;
    wine -= Wcount;

    //Pepsi
    if (Pcount > pepsi) return console.log(`Not enough of pepsi bottles`);
    let Pprise = pepsiPrise * Pcount;
    bank += Pprise;
    pepsi -= Pcount;

    //
    let text = `Wine:${Wcount} bottles; <><>Beer:${Bcount} bottles; <><>Pepsi:${Pcount} bottles; Bank:${bank}grn`;
    if (Bcount == 0)
      text = `Wine:${Wcount} bottles; <><>Pepsi:${Pcount} bottles; Bank:${bank}grn`;
    if (Wcount == 0)
      text = `Beer:${Bcount} bottles; <><>Pepsi:${Pcount} bottles;  Bank:${bank}grn`;
    if (Pcount == 0)
      text = `Wine:${Wcount} bottles; <><>Beer:${Bcount} bottles;  Bank:${bank}grn`;
    return text;
  }
  return {
    sell: sell,
  };
}

export { Market };
