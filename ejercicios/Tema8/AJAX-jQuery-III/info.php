<?php

header('Content-type: text/plain; charset=utf-8');

$students = [
    ["first_name" => "José Rafael", "last_name" => "Álvarez Espino"],
    ["first_name" => "Angelo", "last_name" => "Barbara"],
    ["first_name" => "Guillermo", "last_name" => "Boquizo Sánchez"],
    ["first_name" => "José Manuel", "last_name" => "Bravo Martínez"],
    ["first_name" => "Juan Antonio", "last_name" => "Bujalance Martínez"],
    ["first_name" => "Javier", "last_name" => "Frías Serrano"],
    ["first_name" => "Marcos", "last_name" => "Gallardo Pérez"],
    ["first_name" => "Rafael", "last_name" => "García Zurita"],
    ["first_name" => "Javier", "last_name" => "González Guzmán"],
    ["first_name" => "Samuel", "last_name" => "Luque Reyes"],
    ["first_name" => "Jesús", "last_name" => "Mejías Leiva"],
    ["first_name" => "Adrián", "last_name" => "Moya Moruno"],
    ["first_name" => "Mario", "last_name" => "Navarro Madrid"],
    ["first_name" => "Francisco", "last_name" => "Ramírez Ruíz"],
    ["first_name" => "José María", "last_name" => "Romero Ruíz"],
    ["first_name" => "Rafael", "last_name" => "Sojo Ruíz"]
];
$searchs = array();

if ($_GET["search"]) {
    foreach ($students as $key => $student) {
        if (preg_match('/' . $_GET["search"] . '/i', $student['first_name'] . " " . $student['last_name'])) {
            array_push($searchs, $student);
        }
    }
}

if (sizeof($searchs) === 0) {
    echo 'No se encontraron resultados';
} else {
    echo json_encode($searchs, JSON_UNESCAPED_UNICODE);
}

