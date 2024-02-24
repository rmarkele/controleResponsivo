function checkForNaN(x, x0) {
    if (float(x) === float(x)) {
        return float(x);
    } else {
        return x0;
    }
}