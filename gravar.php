<?php

session_start();

$data = $_POST['arquivo'];

$source = fopen($data, 'r');

if (!isset($_SESSION['nome_arquivo'])) {

$nome = md5(uniqid(""));

$_SESSION['nome_arquivo'] = $nome;

} else {

$nome = $_SESSION['nome_arquivo'];

}

$destination = fopen('upload/'.$nome.'.jpg', 'w');

stream_copy_to_stream($source, $destination);

fclose($source);
fclose($destination);

?>