import './App.css';
import {maxlength}  from './maxlength.js'
import {sqrnondecending}  from './sqrnondecending.js'
import {duplicateShift} from './duplicateShift.js'
 
function App() {
  const num =[1,1,0,1,1,1] ;
 const maxofone = maxlength(num);
 const number=[4, -1,0,3,10];
 const nsqr=sqrnondecending(number);
//const arr=[1,0,2,3,0,4,5,0];
const abc=[1,0,2,3,0,4,5,0];
duplicateShift(abc);
abc.join(", ");
  return (
    <div className="App">
      <header className="App-header"> 
    <p> Problem 1 <br/>
      Given a binary array nums, return the maximum number of consecutive 1's in the array.
<br/>Input: [1,1,0,1,1,1]<br/>
output:{maxofone}<br/>
   
    Problem 2<br/>
  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Input:= [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
<br/>
input:[-4,-1,0,3,10]<br/>
output:[ {nsqr}]<br/>
3. Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the 

remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.


<br/>
 input:[1,0,2,3,0,4,5,0]<br/>
 output:[ { abc.join(", ")}]


</p> 
</header>
    </div>
  );
}

export default App;
