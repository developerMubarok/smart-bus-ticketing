const seatsNumber= document.querySelectorAll('#btn');
let seatCount= 40;
let totalSeat=0;
let totalPrice = 0;
let sets = [];
for(const setNum of seatsNumber){
    setNum.addEventListener('click',function(){
        console.log(sets);
        if(sets.includes(setNum.innerText)){
            return
        }
        if (totalSeat < 4){
            const seat = document.getElementById('selected-ticket');
            totalSeat = totalSeat + 1;
            seat.innerText = totalSeat;
            sets.push(setNum.innerText);
        }
        else {
            alert('You cannot purchase more than 4 tickets.');
            return;
        }
        const seatsLeft = document.getElementById('seats-left');
        seatCount = seatCount - 1;
        seatsLeft.innerText = seatCount;
        setNum.classList.add('bg-green-500');

        const details = document.getElementById('details');
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = setNum.innerText;
        div.appendChild(p);
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        div.appendChild(p2);
        const p3 = document.createElement('p');
        p3.innerText = 550;
        div.classList.add('flex', 'justify-between')
        div.appendChild(p3);
        details.appendChild(div);
        
        totalPrice += 550;
        const totalPriceElement = document.getElementById('total-price');
        totalPriceElement.innerText = totalPrice;
        const grandTotalPriceElement = document.getElementById('grand-total');
        grandTotalPriceElement.innerText = totalPrice;
    })
}


// =================Discoun Coupon code==============
document.getElementById('coupon-button').addEventListener('click', function(){
    // 
    const inputElement=document.getElementById('input-field').value;
    if (inputElement === 'NEW15') {
        const inputAll = document.getElementById('input-all');
        inputAll.classList.add('hidden');

        const discountPrice = document.getElementById('discount-price');
        const h3 = document.createElement('h3');
        h3.innerText = 'Discount Price';
        h3.classList.add('text-base', 'font-medium', 'font-inter');
        discountPrice.appendChild(h3);
        // discount calculation
        const h3t = document.createElement('h3');
        const totalPriceElement = parseInt(document.getElementById('total-price').innerText);
        console.log(totalPriceElement);
        h3t.innerText = 'BDT ' + (totalPriceElement * 15 / 100);
        h3t.classList.add('text-base', 'font-medium', 'font-inter');
        discountPrice.appendChild(h3t);
        const grandTotalPriceElement = document.getElementById('grand-total');
        grandTotalPriceElement.innerText = totalPriceElement - (totalPriceElement * 15 / 100);
        console.log(typeof grandTotalPriceElement);
    }
    else if (inputElement === 'Couple 20') {
        const inputAll = document.getElementById('input-all');
        inputAll.classList.add('hidden');
        const discountPrice = document.getElementById('discount-price');
        const h3 = document.createElement('h3');
        h3.innerText = 'Discount Price';
        h3.classList.add('text-base', 'font-medium', 'font-inter');
        discountPrice.appendChild(h3);
          // discount calculation
        const h3t = document.createElement('h3');
        const totalPriceElement = parseInt(document.getElementById('total-price').innerText);
        console.log(totalPriceElement);
        h3t.innerText = 'BDT ' + (totalPriceElement * 20 / 100);
        h3t.classList.add('text-base', 'font-medium', 'font-inter');
        discountPrice.appendChild(h3t);
        const grandTotalPriceElement = document.getElementById('grand-total');
        grandTotalPriceElement.innerText = totalPriceElement - (totalPriceElement * 20 / 100);
        console.log(typeof grandTotalPriceElement);
    }   
})




  
