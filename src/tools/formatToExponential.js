function formatToExponential(x, xlim, ndigits) {
    if (abs(x) >= xlim) {
      if (typeof ndigits === "undefined") {
        return x.toExponential();
      } else {
        return x.toExponential(ndigits);
      }
    } else {
      if (typeof ndigits === "undefined") {
        return x;
      } else {
        return nf(round(x * 10000) / 10000, 0, ndigits);
      }
    }
  }