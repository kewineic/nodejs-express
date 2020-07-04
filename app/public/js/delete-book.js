let tableBooks = document.querySelector('#livros');
tableBooks.addEventListener('click', (event) => {
    let clickedElement = event.target;

    if (clickedElement.dataset.type == 'remocao') {
        let bookId = clickedElement.dataset.ref;
        fetch(`http://localhost:3000/livros/${bookId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = clickedElement.closest(`#livro_${bookId}`);
                tr.remove();

            })
            .catch(err => console.log(err));

    }

});
