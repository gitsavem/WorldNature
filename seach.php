<?php
// Simulação de resultados de pesquisa
$query = $_GET['q'] ?? '';

// Aqui você faria uma consulta real ao banco de dados ou outra fonte de dados
// para obter resultados de pesquisa relevantes com base na consulta fornecida

// Vamos simular alguns resultados para este exemplo
$results = array(
    array('title' => 'Página 1', 'url' => 'pagina1.html'),
    array('title' => 'Página 2', 'url' => 'pagina2.html'),
    array('title' => 'Página 3', 'url' => 'pagina3.html')
);

header('Content-Type: application/json');
echo json_encode($results);
?>
