function abrirModal(){
     const modal = document.getElementById('window_modal');
     modal.classList.add('abrir');

     modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'window_modal'){
            modal.classList.remove('abrir');
        }
     })
}