

function handleFormSubmit(event) {
    const data = new FormData(document.getElementsByClassName('row g-3')[0]);
    const formJSON = Object.fromEntries(data.entries());
 
    //window.location.href = "http://127.0.0.1:5500/index.html"
 
    console.log(`data:`, formJSON)
 
    const results = document.querySelector('.resultado pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}