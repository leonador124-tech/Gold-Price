const buy = document.querySelector('.buy');
const sell = document.querySelector('.sell');
const date = document.querySelector('.date')

fetch('https://api.chnwt.dev/thai-gold-api/latest')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const Gold = data.response.price.gold

        buy.innerText = Gold.buy + ' THB';
        sell.innerText = Gold.sell + ' THB';
        date.innerText = data.response.update_date;
        console.log(data.response)
    })
