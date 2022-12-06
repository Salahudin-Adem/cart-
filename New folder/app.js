let container=document.querySelector('.container')
let desertitems=document.querySelector('.desert-items')

let explorecart=document.querySelector('.item')

const cakepic=["cake-1.jpeg","cake-2.jpeg","cake-3.jpeg"]
const cakename=['cake1','cake2','cake3']
const cakeprice=[6,4,5]

const cuppic=["cupcake-1.jpeg","cupcake-2.jpeg","cupcake-3.jpeg"]
const cupname=['cupcake1','cupcake2','cupcake3']
const cupprice=[2,3,6]

const donutpic=["doughnut-1.jpeg","doughnut-2.jpeg","doughnut-3.jpeg"]
const donutname=['donut','donut','donut']
const donutprice=[11,9,4]

const sweetpics=["sweets-1.jpeg","sweets-2.jpeg","sweets-3.jpeg"]
const sweetname=['sweet','sweet','sweet']
const sweetprice=[11,7,10]


const allpics=[...cakepic,...cuppic,...donutpic,...sweetpics]
let allprice=[...cakeprice,...cupprice,...donutprice,...sweetprice]
let allname=[...cakename,...cupname,...donutname,...sweetname]

let element=`<i class="fa-solid fa-cart-shopping cart"></i>`

let noitems=document.querySelector('.noofitems')
    let total_price=document.querySelector('.summofprice')

function append(){
for(i=0;i<12;i++){
    let item_div=document.createElement('div')
    let item_pic=document.createElement('img')
    let item_name=document.createElement('label')
    let item_price=document.createElement('label')


    item_pic.id='picture'
    item_div.id='item-div'
    item_name.id='name'
    item_price.id='price'

    item_pic.src=allpics[i]
    item_name.textContent=allname[i]
    item_price.textContent=+allprice[i]

    item_div.insertAdjacentHTML('afterbegin',element)

    item_div.append(item_pic,item_name,item_price)
    desertitems.append(item_div)
                  
}
container.append(desertitems)


}
append()
let price=[6,4,5,9,3,6,11,9,4,21,7,10]

let caro=document.querySelectorAll('.cart')
let count=0
let array=[]
let sum

caro.forEach((item)=>{
    item.addEventListener('click',e=>{
        alert('Item added to your cart')
        count++
        noitems.textContent=`${count}`
        console.log('clicked')
        array.push(Number(e.target.parentNode.lastElementChild.textContent))
        
        sum=array.reduce((acc,cur)=>acc+cur,0)
        console.log(sum)
        console.log(array)

    total_price.textContent='$'+sum
        
    })
})

 let purchaseddiv
 let eachdiv
 let delet
 purchaseddiv=document.createElement('div')


            let cler=document.createElement('button')
            let check=document.createElement('button')
            cler.className='btn'
            check.className='btn'
            cler.id='cler'
            check.id='bton'
            cler.textContent='CLEAR'
            check.textContent='CHECKOUT'


    caro.forEach((item)=>{

        item.addEventListener('click',e=>{
            eachdiv=document.createElement('div')
            eachdiv.className='eachdiv'
        let pic=document.createElement('img')
        let lsbel=document.createElement('label')
        let l2=document.createElement('label')
        delet=document.createElement('i')

        lsbel.className='lsb'

        let totp=document.createElement('label')
        let totpamount=document.createElement('label')

        array.push(Number(e.target.parentNode.lastElementChild.textContent))
        
        sum=array.reduce((acc,cur)=>acc+cur,0)
        totp.textContent='TOTAL PRICE'
        totpamount.textContent='$'+sum


        pic.className='pics'

        let par=e.target.parentNode
        let per=par.querySelector('img')
        pic.src=per.src

        lsbel.textContent=e.target.parentNode.querySelector('#name').textContent+" "+'$'+e.target.parentNode.querySelector('#price').textContent

        delet.className="fa-solid fa-trash del"
       delet.addEventListener('click',e=>{
        e.target.parentNode.remove()
       })


        eachdiv.append(pic,lsbel,delet)
        purchaseddiv.append(eachdiv,cler,check)

        })
        
    })
    explorecart.addEventListener('click',e=>{
        purchaseddiv.className='purchaseddiv'
       
         alert('clicked')
         container.append(purchaseddiv)
 
    
     })

cler.addEventListener('click',e=>{
    e.target.parentNode.remove()
})







