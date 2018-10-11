<?php  
  
$db=new PDO('mysql:dbname=bhb_booking;host=localhost;','root','');  
 
$row=$db->prepare('select * from bl_hotels');  
  
$row->execute();
$json_data=array();
foreach($row as $rec)  
{  
	$json_array['hotel_id']	=	$rec['hotel_id'];  
    $json_array['name']		=	$rec['name'];  
    $json_array['address']	=	$rec['address'];  
    $json_array['price']	=	$rec['price'];  
 
    array_push($json_data,$json_array);  
  
}  
   
echo json_encode($json_data);  
    
?>