var gbid = document.getElementById("goldBID")
var gask = document.getElementById("goldASK")
var sbid = document.getElementById("silverBID")
var sask = document.getElementById("silverASK")


const options = {
       method: 'GET',
       headers: {
        'X-RapidAPI-Key': '90054d4784msh6984357b5c4ce7dp11ebaejsn75914a659829ddd',
            'X-RapidAPI-Host': 'gold-price1.p.rapidapi.comddd'
       }
   };
   
   fetch('https://gold-price1.p.rapidapi.com/get_price/USD', options)
       .then(response => response.json())
       .then(response => 
           {
               console.log(response);
               gbid.innerHTML = response.gold.price;
               gask.innerHTML = response.gold.close;
               sbid.innerHTML = response.silver.price;
               sask.innerHTML = response.silver.close;

           
           })
       .catch(err => console.error(err));

