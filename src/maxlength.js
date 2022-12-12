  export function maxlength(nums){
    //const num = [1,1,0,1,1,1];
    //const temparray=[];
    let max=0;
    const length=nums.length;
    let count=0;
     for(let i=0 ;i<length;i++){  
       if (nums[i]===1){
      // temparray.push(1);
      count++
      //let newlength1=temparray.length;
      if(max<count){
        max=count;
      }
       }
       else{
    //for(let i=0; i<newlength1; i++){
     //temparray.pop();
     count=0;
    }
    
       }
       return max;
     }
     