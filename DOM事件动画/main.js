let n=0
$('div').on('click',(e)=>{
    setTimeout(()=>{
        $(e.currentTarget).addClass("active")
    },n*1000)
    n+=1
})
jQuery实现冒泡过程