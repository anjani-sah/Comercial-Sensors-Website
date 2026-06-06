<?php
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = "root"; // default XAMPP password
$dbname = "productdatabase"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $type = htmlspecialchars(trim($_POST['type']));
    $description = htmlspecialchars(trim($_POST['description']));
    $price = htmlspecialchars(trim($_POST['price']));

    // Insert the new product into the database
    $sql = "INSERT INTO products (name, type, description, price) VALUES ('$name', '$type', '$description', '$price')";
    if ($conn->query($sql) === TRUE) {
        echo "New product added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Fetch all products
$sql = "SELECT id, name, type, description, price FROM products";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Database</title>
</head>
<body>
    <h1>Product Database</h1>

    <form method="POST" action="">
        <input type="text" name="name" placeholder="Sensor Name" required>
        <select name="type" required>
            <option value="IoT">IoT</option>
            <option value="Electronic">Electronic</option>
            <option value="AI">AI</option>
            <option value="Drone">Drone</option>
        </select>
        <textarea name="description" placeholder="Description" required></textarea>
        <input type="number" name="price" placeholder="Price" required>
        <button type="submit">Add Product</button>
    </form>

    <h2>Existing Products</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        <?php
        // Display the products
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<tr>
                    <td>{$row['id']}</td>
                    <td>{$row['name']}</td>
                    <td>{$row['type']}</td>
                    <td>{$row['description']}</td>
                    <td>{$row['price']}</td>
                    <td>
                        <form method='POST' action='update.php' style='display:inline;'>
                            <input type='hidden' name='id' value='{$row['id']}'>
                            <button type='submit'>Update</button>
                        </form>
                        <form method='POST' action='delete.php' style='display:inline;'>
                            <input type='hidden' name='id' value='{$row['id']}'>
                            <button type='submit'>Delete</button>
                        </form>
                    </td>
                </tr>";
            }
        } else {
            echo "<tr><td colspan='6'>No products found</td></tr>";
        }
        ?>
    </table>

</body>
</html>

<?php
$conn->close();
?>
