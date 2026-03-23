const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

urlpar1 = urlParams.get('name')
document.getElementById('name').innerHTML = urlpar1;
if (urlpar1 == "Nick") {
    
}
urlpar1 = urlParams.get('time')
document.getElementById('time').innerHTML = urlpar1;
