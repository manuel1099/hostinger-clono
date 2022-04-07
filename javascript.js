const chk = document.getElementById('chk')

chk.addEventListener('change', ()=>{
    document.getElementById('footer').classList.toggle('dark')
    document.getElementById('input1').classList.toggle('inputcolor')
    document.getElementById('input2').classList.toggle('inputcolor')
} )