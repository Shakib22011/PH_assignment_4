function checkEmpty(){
    const current=document.getElementById(active).children.length;
    // console.log(current);
    if(current===0){
        document.getElementById('empty-card').classList.remove('hidden');
    }else{
        document.getElementById('empty-card').classList.add('hidden');
    }

}

function updateCounter(){
    document.getElementById('interview-count').textContent=document.getElementById('interview-container').children.length;
    document.getElementById('rejected-count').textContent=document.getElementById('reject-container').children.length;
}

function updateTotal(){
    const inter=document.getElementById('interview-container').children.length;
    const rej=document.getElementById('reject-container').children.length;
    const all=document.getElementById('application-cards').children.length;
    document.getElementsByClassName('total')[0].textContent=Number(all)+Number(inter)+Number(rej);
    document.getElementsByClassName('total')[1].textContent=Number(all)+Number(inter)+Number(rej);
}