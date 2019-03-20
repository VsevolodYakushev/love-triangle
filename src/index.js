/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var length = preferences.length; 
  var count = 0;  
  for (var i = 0; i<length; i++) { 
      var nextTriangle = preferences[i] - 1;
      if (nextTriangle == i) continue;
      var nextTriangle2 = preferences[nextTriangle] - 1;
      if (nextTriangle == nextTriangle2) continue;
      var nextTriangle3 = preferences[nextTriangle2] - 1;
      if (nextTriangle3 == nextTriangle2) continue;
      if (nextTriangle3 == i) {
          count++;
      }
   }
   return count / 3;
}
