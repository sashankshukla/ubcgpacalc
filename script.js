function calculate(){
    let grades = document.getElementById("grade").value;
    let credits = document.getElementById("credits").value;
    let grades_arr = grades.split(" ");
    let credits_arr = credits.split(" ");

    let total_credits = 0;
    for(let i=0; i<credits_arr.length; ++i){
        total_credits += parseFloat(credits_arr[i]);
    }

    let avg = 0;
    for(let j=0;j<credits_arr.length; ++j){
        let curr_credit = parseFloat(credits_arr[j]);
        let curr_grade = parseFloat(grades_arr[j]);
        let weight = (curr_credit/total_credits);
        avg += (weight*curr_grade);
    }
    document.getElementById("demo").innerHTML = avg;
}