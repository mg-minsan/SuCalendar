<html>
<head>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<script type="text/javascript" src="scripts/utils.js"></script>
</head>
<body>
	<h1>Sucess Board</h1>	
	<div id="wrapper">
		<div id="month">
			fadfdw
		</div>
		
		
		<?php
		$i; 

		$Weak = ["Sun", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

		for($i = 0; $i < 7; $i++){
			echo "<div class='weekCell'>". $Weak[$i] . "</div>";
		}
		echo "<div id='contentCellWrapper'>";
		for($i = 0; $i < 35; $i++){
		
			
			echo "<div class='contentCell'></div>";
			
		}
		?>
		</div>
	</div>

	<script type="text/javascript" src="scripts/app.js"></script>
</body>
</html>