function checkForUndefined(x, x0) {
    if (typeof x !== "undefined") {
      return checkForNaN(x, x0);
    } else {
      return x0;
    }
  }