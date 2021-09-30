# Reactjs
React js - Routing, signin/singup, http post, nodejs fetch,  custom hook(useForm)

1) Create table in mysql
    CREATE TABLE `users` (
      `id` int NOT NULL AUTO_INCREMENT,
      `name` varchar(45) NOT NULL,
      `email` varchar(45) DEFAULT NULL,
      `mobile` varchar(10) DEFAULT NULL,
      `password` varchar(45) DEFAULT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    /*!40101 SET character_set_client = @saved_cs_client */;
2) Goto ->  /backend/server folder
3) npm install (so that it will create backend node module)
4) come to root folder and type npm install.  So that it will create nodemode for the client.
5) go to backend (/backend/server) and edit index.js and change the db connection details
      const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "password",
        database: "test",
      });
 6) start the backend server (/backend/server) and start the server > node index.
 7) go to root folder and start the client > npm start.
