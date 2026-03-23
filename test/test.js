const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

urlpar1 = urlParams.get('name')
document.getElementById('name').innerhtml = urlpar1;
if (urlpar1 == "Nick") {
    
}
urlpar1 = urlParams.get('time')
document.getElementById('time').innerhtml = urlpar1;
