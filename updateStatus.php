<?php
sleep(1);
	$year  = $_GET['year'];
	$month = $_GET['month'];
	$day   = $_GET['day'];

	if(!empty($year) && !empty($month) && !empty($day)){
		$Date = $year. "-" . $month . "-" . $day;
		$conn = new PDO('mysql:host=calendar.com;dbname=calendar',"root","root");
		$sql = "Insert into calendarStatus (date_info, date_status) values('$Date', 1)";
		$conn->query($sql);


	}
	else{
		echo "denied";
	}
?>
