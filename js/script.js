window.onload=function(){
    document.getElementById("button").addEventListener("click",calculate);
}

  function calculate(){
      let grades = document.getElementById("grade").value;
      let credits = document.getElementById("credits").value;
      let grades_arr = grades.split(" ");
      let credits_arr = credits.split(" ");
    
    // if(grades_arr.length != credits_arr.length){
    //     document.getElementById("demo").innerHTML = "The number of grades and credits are unequal";
    //     return;
    // }
      // map with 100 scale to 4.0 scale conversions
      const convert = new Map([
        [100 , 4.33], [99 , 4.33], [98 , 4.33], 
          [97 , 4.33], [96 , 4.33], [95 , 4.33], 
          [94 , 4.33], [93 , 4.33], [92 , 4.33], 
          [91 , 4.33], 
          [90 , 4.33], [89 , 4.30], [88 , 4.20], 
          [87 , 4.10], [86 , 4.00], [85 , 3.95],
          [84 , 3.90], [83 , 2.85], [82 , 3.80],
          [81 , 3.75], [80 , 3.70], [79 , 3.60],
          [78 , 3.50], [77 , 3.40], [76 , 3.30],
          [75 , 3.20], [74 , 3.10], [73 , 3.00],
          [72 , 2.95], [71 , 2.90], [70 , 2.80],
          [69 , 2.70], [68 , 2.65], [67 , 2.60],
          [66 , 2.55], [65 , 2.50], [64 , 2.40],
          [63 , 2.30], [62 , 2.20], [61 , 2.10],
          [60 , 2.00], [59 , 1.90], [58 , 1.80],
          [57 , 1.70], [56 , 1.60], [55 , 1.50],
          [54 , 1.40], [53 , 1.30], [52 , 1.20],
          [51 , 1.10], [50 , 1.00],
        ]);
  
      //changing from 100 scale to 4.33 scale
      for(let i=0; i<grades_arr.length;++i){
          grades_arr[i]=convert.get(parseInt(grades_arr[i]));
      }

      let total_credits = 0;
      // find total credits
      for(let i=0; i<credits_arr.length; ++i){
          total_credits += parseFloat(credits_arr[i]);
      }


      // calculate 4.0 gpa
      let avg = 0;
      for(let j=0;j<credits_arr.length; ++j){
          let curr_credit = parseFloat(credits_arr[j]);
          let curr_grade = parseFloat(grades_arr[j]);
          let weight = (curr_credit/total_credits);
          avg += (weight*curr_grade);
      }

      if(isNaN(avg)){
          document.getElementById("demo").innerHTML = "An error occured. There was a problem with your input."
      }
      else{
      document.getElementById("demo").innerHTML = "Your GPA is: " + avg.toFixed(2);}
  }