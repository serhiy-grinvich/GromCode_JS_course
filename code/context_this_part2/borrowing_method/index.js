const wallet = {
  transactions: [2, 17, 25, 567, 8],
  getMin() {
    return Math.min(...this.transactions);
  },
  getMax() {
    // console.log(this);
    return Math.max.apply(this, this.transactions);
  },
};
