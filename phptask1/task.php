<?php
echo "<h3>Task 1: Rectangle Area & Perimeter</h3>";

$length = 10;
$width = 5;

$area = $length * $width;
$perimeter = 2 * ($length + $width);

echo "Length: $length, Width: $width <br>";
echo "Area: " . $area . "<br>";
echo "Perimeter: " . $perimeter . "<br>";
?>
<br><br>



<?php
echo "<h3>Task 2: Calculate VAT</h3>";

$amount = 200;
$vat_rate = 0.15;

$vat = $amount * $vat_rate;

echo "Amount: $$amount <br>";
echo "VAT (15%): $$vat <br>";
?>
<br><br>


<?php
echo "<h3>Task 3: Odd or Even</h3>";

$number = 7;

if ($number % 2 == 0) {
    echo "$number is an <strong>Even</strong> number.";
} else {
    echo "$number is an <strong>Odd</strong> number.";
}
?>
<br><br>

<?php
echo "<h3>Task 4: Largest Number</h3>";

$n1 = 10;
$n2 = 25;
$n3 = 5;

echo "Numbers: $n1, $n2, $n3 <br>";

if ($n1 >= $n2 && $n1 >= $n3) {
    echo "Largest number is: $n1";
} elseif ($n2 >= $n1 && $n2 >= $n3) {
    echo "Largest number is: $n2";
} else {
    echo "Largest number is: $n3";
}
?>

<br><br>


<?php
echo "<h3>Task 5: Odd Numbers (10-100)</h3>";

for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0) {
        echo "$i ";
    }
}
?>
<br><br>

<?php
echo "<h3>Task 6: Search Array</h3>";

$numbers = [10, 20, 30, 40, 50];
$search = 30;
$found = false;

echo "Searching for: $search <br>";

foreach ($numbers as $val) {
    if ($val == $search) {
        $found = true;
        break;
    }
}

if ($found) {
    echo "Element $search found in the array!";
} else {
    echo "Element not found.";
}
?>
<br><br>

<?php
echo "<h3>Task 7: Shapes</h3>";


echo "<b>Shape 1:</b><br>";
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "<br>";
}

echo "<br>";

echo "<b>Shape 2:</b><br>";
for ($i = 3; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo "$j ";
    }
    echo "<br>";
}

echo "<br>";


echo "<b>Shape 3:</b><br>";
$char = 'A';
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "$char ";
        $char++;
    }
    echo "<br>";
}
?>
<br><br>

<?php
echo "<h3>Task 8: 2D Array Shapes</h3>";


$matrix = [
    [1, 2, 3, 'A'],
    [1, 2, 'B', 'C'],
    [1, 'D', 'E', 'F']
];

echo "<table border='1' width='50%'><tr><td>";


echo "<b>Numbers Shape:</b><br>";
// Rows 0 to 2
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j <= (2 - $i); $j++) {
        echo $matrix[$i][$j] . " ";
    }
    echo "<br>";
}

echo "</td><td>";

echo "<b>Letters Shape:</b><br>";
// Rows 0 to 2
for ($i = 0; $i < 3; $i++) {
    for ($j = (3 - $i); $j <= 3; $j++) {
        echo $matrix[$i][$j] . " ";
    }
    echo "<br>";
}

echo "</td></tr></table>";
?>