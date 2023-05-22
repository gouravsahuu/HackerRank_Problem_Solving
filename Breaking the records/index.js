let scores = [10,5,20,20,4,5,2,25,1];

function breakingRecords(scores) {
    let curr_min = scores[0];
    let curr_max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for(let i=1;i<scores.length;i++){
        if(scores[i] > curr_max){
            curr_max = scores[i];
            maxCount++;
        }
        else if(scores[i] < curr_min){
            curr_min = scores[i];
            minCount++;
        }        
    }
    let ans = [];
    ans.push(maxCount);
    ans.push(minCount);
    return ans;
}