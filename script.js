
function getQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
            return response.json();
    })
        
    .then(data => {
        console.log(data)
        let advice = data.slip.advice;
        document.getElementById('text').innerText = `"${advice}"`;

        const p = document.getElementById('text');
    p.style.margin = '20px'; 
    p.style.fontFamily = 'Poppins, serif';
    p.style.fontSize = '20px';
    p.style.overflowWrap = 'break-word';
    p.style.justifyContent = 'center';
    p.style.alignItems = 'center';
    });

}

window.onload = getQuote;

function shareQuote(){
   const textToShare = document.getElementById('text').textContent;

   if (navigator.share) {
    navigator.share({
        title: 'Share Text',
        text: textToShare,
    }).then(() => {
        console.log('Successfully shared');
    }).catch((error) => {
        console.error('Error sharing: ', error);
    });
} else {
    alert('Web Share API is not supported on this device.');
    }
}

