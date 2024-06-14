document.getElementById('btn').addEventListener('click' , clickHandler)
async function clickHandler(){
    // send http request and fetching data
    let get_Advice = await fetch("https://api.adviceslip.com/advice");
    // convert data to json
    let Advice = await get_Advice.json();
    // add in DOM
    document.getElementById("advice-place").innerText = Advice.slip.advice;
    };
    
