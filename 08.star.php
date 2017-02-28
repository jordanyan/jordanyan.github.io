<?php 
	$arr=file_get_contents("07.star.json");
	$arr=json_decode($arr);
	$html="";
	for ($i=0; $i <count($arr) ; $i++) { 
		$html.="<tr>";
		$html.="<td>".$arr[$i]->name."</td>";
		$html.="<td>".$arr[$i]->age."</td>";
		$html.="<td>".$arr[$i]->sex."</td>";
		$html.="<td>".$arr[$i]->ablum."</td>";
		$html.="<td>".$arr[$i]->photo."</td>";
		$html.="</tr>";
	}
	echo $html;
?>