import * as copy from "./second.js";

//

let shop = copy.Market();
console.log(shop.sell(1, 1, 1));
console.log(shop.sell(1, 1, 0));
console.log(shop.sell(1, 0, 1));
console.log(shop.sell(0, 1, 1));
