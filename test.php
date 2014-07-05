<?php
$d=cal_days_in_month(CAL_GREGORIAN,2,1965);
echo "There was $d days in February 1965.<br>";

$d=cal_days_in_month(CAL_GREGORIAN,2,2004);
echo "There was $d days in February 2004.";

echo date("w");
?>
