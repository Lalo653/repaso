console.log('conectado...')

const productData = [
    {
        index: '01',
        name:'yellow tracksuit',
        image:'img1.jpg',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque accusamus aspernatur ut laborum illo! Veritatis sequi harum laudantium! Possimus repellendus accusantium distinctio non consectetur quod amet ea, unde quaerat.'
        

    },

    {
        index: '02',
        name:'desinger outfit',
        image:'img2.jpg',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque accusamus aspernatur ut laborum illo! Veritatis sequi harum laudantium! Possimus repellendus accusantium distinctio non consectetur quod amet ea, unde quaerat.'
        

    },

    {
        index: '03',
        name:'chilling nood',
        image:'img3.jpg',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque accusamus aspernatur ut laborum illo! Veritatis sequi harum laudantium! Possimus repellendus accusantium distinctio non consectetur quod amet ea, unde quaerat.'
        

    },

]

const nextBtn = document.querySelector('.ntx-btn')

let smImgContainer = document.querySelector('sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('sm-product-des')
let productImgCointainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')
let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-Name')
let productDes = document.querySelector('.product-Des')

//console.log('Boton, nextBtn')

let currentProduct = 0

nextBtn.addEventListener('click', () => {
    //alert('hola')
    if(currentProdcut >= productData.length - 1){
        currentProduct = 0
        
    }else{
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)
    smImgContainer.classList.add('slide')
    productImgCointainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')
    
})