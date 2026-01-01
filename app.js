let count = localStorage.getItem('hasanat') || 0;
document.getElementById('count').innerText = count;

function addHasanat(){
count++;
localStorage.setItem('hasanat', count);
document.getElementById('count').innerText = count;
}

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js');
}
