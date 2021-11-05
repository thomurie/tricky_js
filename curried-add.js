function curriedAdd(total) {
  if (!total) return 0;
  return function inner(num) {
    if (!num) return total;
    total += num;
    return inner;
  };
}
module.exports = { curriedAdd };
