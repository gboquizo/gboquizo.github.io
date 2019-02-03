<?php
if (isset($_POST)) : ?>
    <p><b>Nombre</b>:<br><?php echo $_POST['nombre']?></p><br/>
    <p><b>Apellidos</b>:<br><?php echo $_POST['apellidos']?></p><br/>
    <p><b>Correo</b>:<br><?php echo $_POST['correo']?></p><br/>
    <p><b>Textarea</b>:<br><?php echo $_POST['textarea']?></p><br/>
<?php endif ?>