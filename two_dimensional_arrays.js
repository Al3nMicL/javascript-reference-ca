//creating multi-dimensional arrays - via codacademy
//specifying a 2d array can be done in one line like so:
twoDimensions = [["a","b"],["c","d"]];

for (i in twoDimensions) {
    for (j in twoDimensions[i]){
    console.log(twoDimensions[i][j]);
    }
}
//you can also select specific elements like by specyfing them like so: ArrayName[][]
//console.log(twoDimensions[1][1]); 