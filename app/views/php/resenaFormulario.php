<?php

class ResenaFormulario {
    public function guardarResena() {
        // Verificar si se ha enviado el formulario
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Obtener los datos del formulario
            $fecha = $_POST["fecha"];
            $genero = $_POST["genero"];
            $nacionalidad = $_POST["nacionalidad"];
            $tipo_documento = $_POST["tipo_documento"];
            $documento = $_POST["documento"];
            $fecha_registro = $_POST["fecha_registro"];
            $resena = $_POST["resena"];
            
            // Procesar los datos (en este caso, guardarlos en un archivo de texto)
            $datos_resena = "Nombre: $nombre\nApellido: $apellido\nFecha de Nacimiento: $fecha_nacimiento\nGénero: $genero\nNacionalidad: $nacionalidad\nTipo de Documento: $tipo_documento\nNúmero de Documento: $documento\nFecha de Registro: $fecha_registro\nReseña: $resena\n\n";
            file_put_contents("resenas.txt", $datos_resena, FILE_APPEND);
            
            // Redirigir o mostrar un mensaje de éxito
            // Por ejemplo:
            echo "¡Reseña enviada con éxito!";
            // O puedes redirigir al usuario a una página de confirmación
            // header("Location: confirmacion.php");
            exit();
        }
    }
    
    public function mostrarResenas() {
        // Leer todas las reseñas del archivo de texto
        $todas_resenas = file_get_contents("resenas.txt");
        
        // Separar las reseñas individuales en un array
        $resenas_array = explode("\n\n", $todas_resenas);
        
        // Mostrar las reseñas
        foreach ($resenas_array as $resena) {
            echo '<li class="visitante">';
            echo "<p>$resena</p>";
            echo '</li>';
        }
    }
}

// Crear una instancia de la clase y mostrar las reseñas
$formulario = new ResenaFormulario();
$formulario->guardarResena();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reseñas de Visitantes</title>
</head>
<body>
    <div class="container">
        <h1>Reseñas de Visitantes</h1>
        <ul>
            <?php $formulario->mostrarResenas(); ?>
        </ul>
    </div>
</body>
</html>