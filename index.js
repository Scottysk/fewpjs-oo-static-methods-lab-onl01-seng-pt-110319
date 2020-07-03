class Formatter {
  static capitalize(cap) {
    return cap.charAt(0).toUpperCase() + cap.slice(1);
  }
  
  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '');
  }
  
  static titleize(str) {
    let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let capi
  }
  
}