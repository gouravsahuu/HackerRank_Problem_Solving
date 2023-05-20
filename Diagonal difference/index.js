let arr = [[1,2,3],[4,5,6],[7,8,9]]; //input
let ans1 = 0;
let ans2 = 0;
    
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(i == j){
            ans1 = ans1 + arr[i][j];
        }
    }
}
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if((i+j) == (arr.length-1)){
            ans2 = ans2 + arr[i][j];
        }
    }
}
return Math.abs(ans2 - ans1);