<?php
include 'db_connect.php';  // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $position = $_POST['position'];
    $salary = $_POST['salary'];
    $age = $_POST['age'];
    $gender = isset($_POST['gender']) ? $_POST['gender'] : ''; // Check if 'gender' exists
    $department = isset($_POST['department']) ? $_POST['department'] : ''; // Check if 'department' exists

   $positionQuery = "SELECT position_id FROM Positions WHERE position LIKE ?";
    $stmt = $conn->prepare($positionQuery);
    $stmt->bind_param('s', $position);
    $stmt->execute();
    $positionResult = $stmt->get_result();

    if ($positionResult->num_rows > 0) {
        $positionRow = $positionResult->fetch_assoc();
        $positionId = $positionRow['position_id'];
    } else {
        echo "Error: Position not found.";
        exit();
    }

    // 3. Find department_id based on department name
    $departmentQuery = "SELECT department_id FROM Departments WHERE department_name = ?";
    $stmt = $conn->prepare($departmentQuery);
    $stmt->bind_param('s', $department);
    $stmt->execute();
    $departmentResult = $stmt->get_result();

    if ($departmentResult->num_rows > 0) {
        $departmentRow = $departmentResult->fetch_assoc();
        $departmentId = $departmentRow['department_id'];
    } else {
        echo "Error: Department not found.";
        exit();
    }

    // Insert into Employees table with the retrieved position_id and department_id
    $insertQuery = "INSERT INTO Employees (name, gender, age, department_id, position_id, salary) 
                    VALUES ('$fullName', '$gender', '$age', '$departmentId', '$positionId', '$salary')";

       $insertQuery->bind_param("ssiiii", $fullName, $gender, $age, $departmentId, $positionId, $salary);


    if ($conn->query($insertQuery) === TRUE) {
        echo "New employee added successfully";
    } else {
        echo "Error: " . $insertQuery . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
