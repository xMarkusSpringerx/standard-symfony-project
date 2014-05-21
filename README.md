Symfony Standard Project
========================

A symfony standard project with FOS UserBundle, bootstrap and bower

PDO Session Handler
===================

This project uses the pdo session handler. To use this you need to create a table in the database.

```
CREATE TABLE `session` (
    `session_id` varchar(255) NOT NULL,
    `session_value` text NOT NULL,
    `session_time` int(11) NOT NULL,
    PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```

