document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    var query = document.getElementById('searchInput').value;
    if (query.trim() !== '') {
        fetchResults(query);
    }
});

function fetchResults(query) {
    fetch('search.php?q=' + query)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => console.error('Erro ao buscar resultados:', error));
}

function displayResults(results) {
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Limpa os resultados anteriores

    if (results.length > 0) {
        results.forEach(function(result) {
            var resultElement = document.createElement('a');
            resultElement.href = result.url; // Assume que cada resultado tem uma propriedade "url"
            resultElement.textContent = result.title; // Assume que cada resultado tem uma propriedade "title"
            searchResultsDiv.appendChild(resultElement);
        });
    } else {
        searchResultsDiv.textContent = 'Nenhum resultado encontrado.';
    }
}
