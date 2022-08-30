<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "127.0.0.1"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "songs";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlsongs = mysqli_query($conexionBD,"SELECT * FROM registered_songs WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlsongs) > 0){
        $registered_songs = mysqli_fetch_all($sqlsongs,MYSQLI_ASSOC);
        echo json_encode($registered_songs);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlsongs = mysqli_query($conexionBD,"DELETE FROM registered_songs WHERE id=".$_GET["borrar"]);
    if($sqlsongs){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $SONG_TITLE=$data->SONG_TITLE;
    $SONGWRITER=$data->SONGWRITER;
    $YEARPUB=$data->YEARPUB;
    $RECORD_COMPANY=$data->RECORD_COMPANY;
    $GENRE=$data->GENRE;
    $MEDIA=$data->MEDIA;
       // if(($SONGWRITER!="")&&($SONG_TITLE!="")&&($YEARPUB!="")&&($RECORD_COMPANY!="")&&($GENRE!="")&&($MEDIA!="")){
            
    $sqlsongs = mysqli_query($conexionBD,"INSERT INTO registered_songs(SONG_TITLE,SONGWRITER, YEARPUB, RECORD_COMPANY, GENRE, MEDIA) VALUES('$SONG_TITLE','$SONGWRITER', '$YEARPUB', '$RECORD_COMPANY', '$GENRE', '$MEDIA') ");
    echo json_encode(["success"=>1]);
       // }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    //$id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $id=$data->id;
    $SONG_TITLE=$data->SONG_TITLE;
    $SONGWRITER=$data->SONGWRITER;
    $YEARPUB=$data->YEARPUB;
    $RECORD_COMPANY=$data->RECORD_COMPANY;
    $GENRE=$data->GENRE;
    $MEDIA=$data->MEDIA;
    
    $sqlsongs = mysqli_query($conexionBD,"UPDATE registered_songs SET SONG_TITLE ='$SONG_TITLE',SONGWRITER = '$SONGWRITER' , 
    YEARPUB = '$YEARPUB', RECORD_COMPANY = '$RECORD_COMPANY',
     GENRE = '$GENRE', MEDIA = '$MEDIA' WHERE id='$id' ");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla empleados
$sqlsongs = mysqli_query($conexionBD,"SELECT * FROM registered_songs ");
if(mysqli_num_rows($sqlsongs) > 0){
    $songs = mysqli_fetch_all($sqlsongs,MYSQLI_ASSOC);
    echo json_encode($songs);
}
else{ echo json_encode([["success"=>0]]); }


?>