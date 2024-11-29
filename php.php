<?php
if (isset($_POST['user']) && $_POST['user'] && isset($_POST['password']) && $_POST['password']) {
  echo json_encode(array('success' => 1));
} else {
    echo json_encode(array('success' => 0));
}
  ?>
  <?php
$directorio = 'archivos/';
$subir_archivo = $directorio.basename($_FILES['subir_archivo']['name']);
echo "<div>";
if (move_uploaded_file($_FILES['subir_archivo']['tmp_name'], $subir_archivo)) {
echo "El archivo es válido y se cargó correctamente.<br><br>";
echo"<a href='".$subir_archivo."' target='_blank'><img src='".$subir_archivo."' width='150'></a>";
} else {
echo "La subida ha fallado";
}
echo "</div>";
?>
<?php
// contiene el mensaje a mostrar al usuario
$message="";
 
// si vale 1 todo ha ido bien, 0 ha habido algun problema
$ok=1;
 
if($_POST["nombre"])
{
    $message.="El nombre recibido es: ".$_POST["nombre"]."\n";
}else{
    $message.="No se ha recibido el nombre\n";
    $ok=0;
}
 
if($_FILES)
{
    foreach($_FILES as $file)
    {
        if($file["error"]==UPLOAD_ERR_OK)
        {
            // movemos el archivo a la carpeta donde se encuentra este archivo
            move_uploaded_file($file["tmp_name"], "./".$file["name"]);
            $message.="La imagen ".$file["name"]." se ha recibido correctamente\n";
        }
    }
}else{
    $message.="No se ha recibido ningun archivo\n";
    $ok=0;
}
 
# devolvemos un json con la información
echo json_encode(array("ok"=>$ok,"message"=>$message));
?>