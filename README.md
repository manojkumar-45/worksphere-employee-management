# 🚀 WorkSphere — Employee Management System (EMS)

WorkSphere is a modern and efficient **Employee Management System** built using  
**Spring Boot + React + MySQL + JWT Security**.  
It provides a fast, secure, and clean interface for managing employees—such as  
adding, updating, deleting, and listing employee records.

---

## 🌟 Features

✔ Secure Admin Login (JWT Authentication)  
✔ Add New Employees  
✔ Update Existing Employee Details  
✔ Delete Employee Records  
✔ View All Employees in a Clean Table Layout  
✔ Modern UI Built with React  
✔ RESTful API Using Spring Boot  
✔ MySQL Database Integration  
✔ Responsive & Fast Application  

---

## 🛠️ Technologies Used

### **Frontend**
- React JS  
- Axios  
- React Router DOM  
- CSS  
- Vite  

### **Backend**
- Spring Boot  
- Spring Web  
- Spring Security (JWT)  
- JPA + Hibernate  
- MySQL  
- Lombok  

### **Database**
- MySQL 8+

---

# ⚙️ Setup Guide — How to Run WorkSphere

Follow these steps to run the project on your system.

---

## 🗄️ 1. Create Database in MySQL

Open MySQL and create the database:

```sql
CREATE DATABASE emsdb;
```
---

## 🔐 2. Insert Admin Login Credentials

Before running the backend, insert the default admin user:
```
INSERT INTO admins (username, password)
VALUES ('admin', '$2a$10$w7n5WdZYJgN.NrxO8UskS.VWA4ZHD2IVpNQnUkZXH3YcLG2XBtVSe');
```

➡ Password: admin123 (bcrypt encrypted)

---

## ⚙️ 3. Configure Backend (Spring Boot)

Open the backend folder in IntelliJ IDEA.

Navigate to:
```
src/main/resources/application.properties
```

Add your MySQL and JWT configurations:
```
spring.datasource.url=jdbc:mysql://localhost:3306/emsdb
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD
```
JWT secret key 
jwt.secret=PASTE_YOUR_SECRET_HERE

jwt.expiration=3600000
---

## ▶️ 4. Run Backend (Spring Boot API)

Inside IntelliJ IDEA:

Select the main Spring Boot application

Click Run

Your backend will start at:
```
http://localhost:8080
```
---
## 💻 5. Setup Frontend (React)

Open the frontend folder using VS Code or terminal:
```
cd frontend
```
Install project dependencies:
```
npm install
```
Start the React development server:
```
npm run dev
```
Frontend runs at:
```
http://localhost:5173
```
---

## 🔑 6. Admin Login

After both servers are running, open the frontend UI and log in:
```
Username: admin
Password: admin123
```
Once logged in, you can manage employee records.

## Why Choose WorkSphere?
💼 Efficient Employee Management

Manage employees quickly with a clean, user-friendly UI.

🔐 Secure Authentication

JWT ensures that only authorized admins can access the system.

⚡ Fast Performance

React + Vite delivers a smooth experience with instant updates.

🧩 Powerful Backend

Spring Boot REST API provides scalable and robust data handling.

🎨 Modern UI

Beautiful layout and intuitive workflow for everyday usage.
