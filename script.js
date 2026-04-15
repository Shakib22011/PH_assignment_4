let active='application-cards';
function showOnly(id,btnid){
     active=id;

    const all=document.getElementById('application-cards');
    const interview= document.getElementById('interview-container');
    const reject=document.getElementById('reject-container');

    all.classList.add('hidden');
    interview.classList.add('hidden');
    reject.classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

    document.getElementById('id1').className='btn';
    document.getElementById('id2').className='btn';
    document.getElementById('id3').className='btn';

    document.getElementById(btnid).className='btn btn-active btn-primary';
    
    checkEmpty();
    updateCounter();
    
}


document.getElementById('application-cards').addEventListener('click',function(event){
    const card=event.target.closest('.cards');
    if(!card)
        return;

    if(event.target.classList.contains('interview-btn')){
        
         const replace=card.querySelector('.buttons');
        if(replace){
            replace.textContent='Interview';
            replace.classList.remove('bg-gray-400');
            replace.classList.add('btn-outline', 'btn-success');
        }
        document.getElementById('interview-container').appendChild(card);
        updateCounter();
        
    }
    if(event.target.classList.contains('reject-btn')){
          const replace=card.querySelector('.buttons');
        if(replace){
            replace.textContent='Rejected';
            replace.classList.remove('bg-gray-400');
            replace.classList.add('btn-outline', 'btn-error');
        }
        document.getElementById('reject-container').appendChild(card);
        updateCounter();
    }
    checkEmpty();
   
})

document.getElementById('interview-container').addEventListener('click',function(event){
    const card=event.target.closest('.cards');
    if(!card)
        return;

    if(event.target.classList.contains('reject-btn')){
          const replace=card.querySelector('.buttons');
        if(replace){
            replace.textContent='Rejected';
            replace.classList.remove('bg-gray-400', 'btn-error', 'btn-success');
            replace.classList.add('btn-outline', 'btn-error');
        }
        document.getElementById('reject-container').appendChild(card);
        updateCounter();
    }
   
    checkEmpty();
})

document.getElementById('reject-container').addEventListener('click',function(event){
    const card=event.target.closest('.cards');
    if(!card)
        return;

    if(event.target.classList.contains('interview-btn')){
          const replace=card.querySelector('.buttons');
        if(replace){
            replace.textContent='Interview';
            replace.classList.remove('bg-gray-400', 'btn-error', 'btn-success');
            replace.classList.add('btn-outline', 'btn-success');
        }
        document.getElementById('interview-container').appendChild(card);
        updateCounter();
    }
    checkEmpty();
    
})

document.addEventListener('click', function(event){
    const btn = event.target.closest('.delete-btn');
    if(btn){
        const card = btn.closest('.cards');
        if(card){
            card.remove();
        }
        updateTotal();
        updateCounter();
        checkEmpty();
    }

});


window.onload = function(){
    showOnly('application-cards');
}