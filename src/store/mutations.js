import * as Types from './mutations-type'

let mutations = {
  [Types.ADD_TO_CART](state, book) {
    let bookToBeAdded = state.cartList.find(item => item.bookId === book.bookId);
    if (bookToBeAdded) {
      bookToBeAdded.bookCount += 1;
      state.cartList = [...state.cartList]
    } else {
      book.bookCount = 1;
      state.cartList = [...state.cartList, book]
    }
  },
  [Types.REDUCE_COUNT](state, book) {
    let bookToBeReduced = state.cartList.find(item => item.bookId === book.bookId)
    if (bookToBeReduced.bookCount < 1) return
    bookToBeReduced.bookCount -= 1
    state.cartList = [...state.cartList]
  },
  [Types.INCREASE_COUNT](state, book) {
    let bookToBeIncreased = state.cartList.find(item => item.bookId === book.bookId)
    bookToBeIncreased.bookCount += 1
    state.cartList = [...state.cartList]
  },
};
export default mutations
