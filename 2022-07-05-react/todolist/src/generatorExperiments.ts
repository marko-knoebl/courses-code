function* countTo10() {
  for (let i = 1; i <= 10; i++) {
    yield i;
  }
}

function* squareRootGenerator(nums: any) {
  for (let num of nums) {
    yield Math.sqrt(num);
  }
}

function* tenSquareRoots() {
  yield* squareRootGenerator(countTo10());
}

function run() {
  for (let s of tenSquareRoots()) {
    console.log(s);
  }
}

run();

// ===

// const loadCartActions = [loadCartStart, loadCartSuccess];
// const loadProductsActions = [loadProductsStart, loadProductsSuccess];
// const loadSpecialOffersActions = [
//   loadSpecialOffersStart,
//   loadSpecialOffersSuccess,
// ];

// const loadShopDataActions = [
//   ...loadCartActions,
//   ...loadProductsActions,
//   ...loadSpecialOffersActions,
// ];

// ...

// function* loadShopData() {
//   yield* loadCart();
//   yield* loadProducts();
//   yield* loadSpecialOffers();
// }

// function* loadCart() {
//   const res = yield loadCartStart();
//   if (res.ok) {
//     yield put({ type: "loadCartSuccess", payload: res.data });
//   } else {
//     yield put({ type: "loadCartError" });
//   }
// }

export {};
