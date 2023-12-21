
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');
// const productprice = document.querySelector('.product-price');
const priceChange = document.querySelectorAll('.price-change span');
// const firstPrice =document.querySelector('.onebtn')
// const secondPrice =document.querySelector('.twobtn')
// const threePrice =document.querySelector('.threebtn')

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('click', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}
// firstPrice.addEventListener('click',()=>{
//     productprice.innerText="₹43,900.00"
// })
// secondPrice.addEventListener('click',()=>{
//     productprice.innerText="₹48,900.00"
// })
// threePrice.addEventListener('click',()=>{
//     productprice.innerText="₹58,900.00"
// })