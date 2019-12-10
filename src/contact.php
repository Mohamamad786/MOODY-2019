<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials:true");
header('Content-type: application/json');  
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "reactdb"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':
 //     $id = $_GET['id'];
      $sql = "select * from property"; 
      break;
    case 'POST':
      $name = $_POST["name"];
      $key = $_POST["key"];

      $sql = "insert into property (name, date) values ('$name', '$key')"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {

   for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
		
		$row = mysqli_fetch_assoc($result);
		$rows[] = $row;
		//echo $row;
//	echo	"id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["date"]. "<br>";
 //   echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
			echo json_encode($rows);

  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  } 

$con->close();