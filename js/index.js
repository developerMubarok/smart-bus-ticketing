let selectedSeats=[];
const sitPrice= 550;
let  availableSeat= 40;
const selectedSet=[]

function handleClick(e) {
    const clickBtn=e.target
    if (clickBtn.classList.contains("selected")) {
        return;
      }
    // Check 4 seat
    const selectedButton=document.querySelectorAll('.selected');
    if(selectedButton.length >= 4){
    alert('You have already 4 seat selected')
    return
    }
    clickBtn.classList.add("selected");
    clickBtn.style.backgroundColor=('green');
    clickBtn.style.color=('white');
    const selectedSeat=clickBtn.textContent;
    selectedSeats.push(selectedSeat)
    const selectedCount=selectedSeats.length;
    availableSeat--;
    document.getElementById('seats-left').innerText=availableSeat;

    document.getElementById('selected-ticket').textContent=selectedCount; 
    calculateTotalePrice()

    // total price
}
document.querySelectorAll('#btn').forEach((button)=>{
    button.addEventListener('click',handleClick)
})

function calculateTotalePrice(){
    const totalPrice =selectedSeats.length *sitPrice
    const totalPriceElement=document.getElementById('total-price').innerText=totalPrice;
    const grandTotalPriceElement=document.getElementById('grand-total').innerText=totalPrice

}
