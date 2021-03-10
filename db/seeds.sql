INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
 ('Nathan', 'Chow', 1, 1);
INSERT INTO role (title, salary, department_id)
VALUES
 ('Lead Engineer', '100000', '1'),
 ('Software Engineer', '60000', '1'),
 ('Lead Accountant', '70000', '2'),
 ('Junior Accountant', '45000', '2'),
 ('Lead Sales', '80000', '3'),
 ('Junior Sales', '45000', '3'),
 ('Associate Lawyer', '150000', '4'),
 ('Junior Lawyer', '60000', '4');
INSERT INTO department (name)
VALUES
 ('Engineering'),
 ('Finance'),
 ('Sales'),
 ('Legal');
INSERT INTO manager (name)
VALUES
 ('Nathan Chow'),
 ('John Yun'),
 ('Paul Chang'),
 ('Tracy Nguyen');
  
