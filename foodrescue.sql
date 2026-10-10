CREATE DATABASE foodrescue;

USE foodrescue;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Donor', 'Receiver', 'Admin') NOT NULL
);

CREATE TABLE food_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(150) NOT NULL,
    food_type VARCHAR(100),
    quantity INT NOT NULL,
    location VARCHAR(255),
    available_until DATETIME,
    status VARCHAR(50),
    donor_id INT NOT NULL,
    FOREIGN KEY (donor_id) REFERENCES users(id)
);

CREATE TABLE food_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    food_id INT NOT NULL,
    receiver_id INT NOT NULL,
    request_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),
    FOREIGN KEY (food_id) REFERENCES food_items(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

        