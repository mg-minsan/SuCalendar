<?php

	$conn = new PDO ('mysql:host=calendar.com;dbname=calendar', "root", "root");
	$sql = "SELECT * FROM calendarStatus";
	$rows = $conn->query($sql);
	$date_status = array();
	$i = 0;
	foreach ($rows as $row) {

		$date_status[$i] = $row["date_status"];
		$i++;
	}
	echo json_encode(array("status" => $date_status));

?>
