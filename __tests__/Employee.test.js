const Employee = require ("../lib/Employee");
const employee = new Employee ("Dariel", "042222", "dariel@gmail.com")

test ("values for employee will be fed in", ()=> {
    expect(employee.name).toBe("Dariel");
    expect(employee.id).toBe("042222");
    expect(employee.email).toBe("dariel@gmail.com")
});

test ("here we're getting the name of the employee", () => {
    expect(employee.getName()).toBe("Dariel");
});

test ("here we're getting the id of the employee", () => {
    expect(employee.getId()).toBe("042222");
});

test ("here we're getting the email of the employee", () => {
    expect(employee.getEmail()).toBe("dariel@gmail.com");
});

test ("here we're getting the role of the employee", () => {
    expect(employee.getRole()).toBe("Employee");
});
