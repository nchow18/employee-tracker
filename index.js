const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

optionRoles = ['Lead Engineer', 'Software Engineer', 'Lead Accountant', 'Junior Accountant', 'Lead Sales', 'Junior Sales', 'Associate Lawyer', 'Junior Lawyer']

optionDep = ['Engineering', 'Finance', 'Sales', 'Legal']

employees = [
    {
        id: 1,
        first_name: 'Nathan',
        last_name: 'Chow',
        title: 'Lead Engineer',
        department: 'Engineering',
        salary: '100000',
        manager: 'Nathan Chow'
    },
    {
        id: 2,
        first_name: 'John',
        last_name: 'Doe',
        title: 'Software Engineer',
        department: 'Engineering',
        salary: '60000',
        manager: 'Nathan Chow'
    },
    {
        id: 3,
        first_name: 'David',
        last_name: 'Mango',
        title: 'Lead Accountant',
        department: 'Finance',
        salary: '70000',
        manager: 'John Yun'
    },
    {
        id: 4,
        first_name: 'Peter',
        last_name: 'Grass',
        title: 'Junior Accountant',
        department: 'Finance',
        salary: '45000',
        manager: 'John Yun'
    },
]

roles = [
    {
        id: '1',
        role: 'Lead Engineer',
        salary: '100000'
    },
    {
        id: '2',
        role: 'Software Engineer',
        salary: '60000'
    },
    {
        id: '3',
        role: 'Lead Accountant',
        salary: '70000'
    },
    {
        id: '4',
        role: 'Junior Accountant',
        salary: '45000'
    },
    {
        id: '5',
        role: 'Lead Sales',
        salary: '80000'
    },
    {
        id: '6',
        role: 'Junior Sales',
        salary: '45000'
    },
    {
        id: '7',
        role: 'Associate Lawyer',
        salary: '60000'
    },
    {
        id: '8',
        role: 'Junior Lawyer',
        salary: '60000'
    },
]

departments = [
    {
        id: '1',
        name: 'Engineering',
    },
    {
        id: '2',
        name: 'Finance',
    },
    {
        id: '3',
        name: 'Sales',
    },
    {
        id: '4',
        name: 'Legal',
    }
]

managers = [
    {
        id: '1',
        name: 'Nathan Chow',
    },
    {
        id: '2',
        name: 'John Yun',
    },
    {
        id: '3',
        name: 'Paul Chang',
    },
    {
        id: '4',
        name: 'Tracy Nguyen',
    }
]

optionEmployees = []

const displayEmployees = () => {
    for (var i = 0; i < employees.length; i++) {
        optionEmployees.push(employees[i].first_name);
    }
}

const employeeManager = () => {
    console.log(`
███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗
██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝
█████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░
██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░
███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗
╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝

███╗░░░███╗░█████╗░███╗░░██╗░█████╗░░██████╗░███████╗██████╗░
████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝░██╔════╝██╔══██╗
██╔████╔██║███████║██╔██╗██║███████║██║░░██╗░█████╗░░██████╔╝
██║╚██╔╝██║██╔══██║██║╚████║██╔══██║██║░░╚██╗██╔══╝░░██╔══██╗
██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║╚██████╔╝███████╗██║░░██║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝
    `);

    init();
}

const init = () => {

    return inquirer.prompt([
        //OPTION: view all departments, view all roles, view all employees, add a department, add a role, add an employee and update an employee role
        {
            type: 'list',
            name: 'action',
            message: 'Choose An Option',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Exit']
        }
    ])
    .then(choice => {
        if (choice.action === 'View All Departments') {
            viewDepartments();
        }
        if (choice.action === 'View All Roles') {
            viewRoles();
        }
        if (choice.action === 'View All Employees') {
            viewEmployees();
        }
        if (choice.action === 'Add Department') {
            addDepartment();
        }
        if (choice.action === 'Add A Role') {
            addRole();
        }
        if (choice.action === 'Add An Employee') {
            addEmployee();
        }
        if (choice.action === 'Update An Employee Role') {
            updateEmployeeRole();
        }
        if (choice.action === 'Exit') {
            exit();
        }
    })
}

const cont = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose An Option',
            choices: ['Choose Options Again?', 'Exit?']
        }
    ])
    .then(choice => {
        if (choice.action === 'Choose Options Again?') {
            init();
        }
        if (choice.action === 'Exit?') {
            exit();
        }
    })
}

const exit = () => {
    console.log(`
─────────────────────────────────────────────────────────────
─██████████████─████████──████████─██████████─██████████████─
─██░░░░░░░░░░██─██░░░░██──██░░░░██─██░░░░░░██─██░░░░░░░░░░██─
─██░░██████████─████░░██──██░░████─████░░████─██████░░██████─
─██░░██───────────██░░░░██░░░░██─────██░░██───────██░░██─────
─██░░██████████───████░░░░░░████─────██░░██───────██░░██─────
─██░░░░░░░░░░██─────██░░░░░░██───────██░░██───────██░░██─────
─██░░██████████───████░░░░░░████─────██░░██───────██░░██─────
─██░░██───────────██░░░░██░░░░██─────██░░██───────██░░██─────
─██░░██████████─████░░██──██░░████─████░░████─────██░░██─────
─██░░░░░░░░░░██─██░░░░██──██░░░░██─██░░░░░░██─────██░░██─────
─██████████████─████████──████████─██████████─────██████─────
─────────────────────────────────────────────────────────────
`)
    return;
}

const viewDepartments = () => {
    console.log(`
    ==========================
    DISPLAYING ALL DEPARTMENTS
    ==========================
    `);

    console.table(departments);
    cont();
}

const viewRoles = () => {
    console.log(`
    ====================
    DISPLAYING ALL ROLES
    ====================
    `);

    console.table(roles);
    cont();
}

const viewEmployees = () => {
    console.log(`
    ========================
    DISPLAYING ALL EMPLOYEES
    ========================
    `);

    console.table(employees)
    cont();
}

const addDepartment = () => {
    console.log(`
    =================
    ADDING DEPARTMENT
    =================
    `);

    const index = departments.length;

    return inquirer.prompt([
        {
            type: 'text',
            name: 'dep',
            message: 'Enter New Department',
            validate: newDep => {
                if (!newDep) {
                    return false;
                } else {
                    const id = index + 1;
                    departments.push({ id: id, name: newDep })
                    optionDep.push(newDep)
                    return true;
                }
            }
        }
    ])
    .then(choice => {
        if (choice) {
            cont()
        }
    })
}

const addRole = () => {
    console.log(`
    ===========
    ADDING ROLE
    ===========
    `);

    const index = roles.length;

    return inquirer.prompt([
        {
            type: 'text',
            name: 'role',
            message: 'Enter New Role',
            validate: newRole => {
                if (!newRole) {
                    return false;
                } else {
                    const id = index + 1;
                    roles.push({ id: id, role: newRole })
                    optionRoles.push(newRole)
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'salary',
            message: `Input New Salary`,
            validate: newSalary => {
                if (!newSalary) {
                    return false;
                } else {
                    roles[index].salary = newSalary;
                    return true;
                }
            }
        }
    ])
    .then(start => {
        if (start) {
        }
        cont();
    })
}

const addEmployee = () => {
    console.log(`
    ===============
    ADDING EMPLOYEE
    ===============
    `);

    const index = employees.length;

    return inquirer.prompt([
        {
            type: 'text',
            name: 'firstName',
            message: 'Add Employees First Name',
            validate: firstName => {
                if (!firstName) {
                    return false;
                } else {
                    const id = index + 1;
                    employees.push({ id: id, first_name: firstName })
                    optionEmployees.push(firstName);
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'lastName',
            message: 'Add Employees Last Name',
            validate: lastName => {
                if (!lastName) {
                    return false;
                } else {
                    employees[index].last_name = lastName;
                    return true;
                }
            }
        },
        {
            type: 'list',
            name: 'action',
            message: 'Choose Employees Role',
            choices: optionRoles
        }
    ])
    .then(choice => {
        for (var i = 0; i < roles.length; i++) {
            if (choice.action === roles[i].role) {
                employees[index].title = choice.action;
                employees[index].salary = roles[i].salary;

                if (choice.action === 'Lead Engineer') {
                    employees[index].manager = 'Nathan Chow';
                }
                if (choice.action === 'Software Engineer') {
                    employees[index].manager = 'Nathan Chow';
                }
                if (choice.action === 'Lead Accountant') {
                    employees[index].manager = 'John Yun';
                }
                if (choice.action === 'Junior Accountant') {
                    employees[index].manager = 'John Yun';
                }
                if (choice.action === 'Lead Sales') {
                    employees[index].manager = 'Paul Chang';
                }
                if (choice.action === 'Junior Sales') {
                    employees[index].manager = 'Paul Chang';
                }
                if (choice.action === 'Associate Lawyer') {
                    employees[index].manager = 'Tracy Nguyen';
                }
                if (choice.action === 'Junior Lawyer') {
                    employees[index].manager = 'Tracy Nguyen';
                } else {
                    employees[index].manager = 'null';
                }
            }
        }
        updateDepartment();
    })
}

const updateDepartment = () => {

    const index = employees.length - 1;

    return inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose Employees Department',
        choices: optionDep
    })
    .then(dep => {
            if (dep) {
                employees[index].department = dep.action;
            }
            cont();
        })
}

const updateEmployeeRole = () => {
    console.log(`
    =================
    UPDATING EMPLOYEE
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'update',
            message: 'Choose Employee To Update',
            choices: optionEmployees
        }
    ])
    .then(choice => {
        for (var i = 0; i < optionEmployees.length; i++) {
            if (choice.update === optionEmployees[i]) {
            }
        }
        newRole(choice.update)
    })
}

const newRole = (edit) => {

    console.table(employees);
    const index = optionEmployees.indexOf(edit);

    console.log(index);

    const employee = optionEmployees[index];

    return inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: `Choose ${employee} New Role`,
            choices: optionRoles
        }
    ])
    .then(option => {
    
        if (option) {
            employees[index].title = option.roles;
            cont();
        }
    })
}

displayEmployees();
employeeManager();
