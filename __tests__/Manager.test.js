const Manager = require ("../lib/Manager");
const Manager = new Manager ("Dariel", "042222", "dariel@gmail.com", "422")

test("values for engineer will be fed in",() => {
    expect(manager.name).toBe("Dariel");
    expect(manager.id).toBe("042222");
    expect(manager.email).toBe("dariel@gmail.com");
    expect(manager.github).toBe("422");
});

test("here we're getting the name of the manager",() => {
    expect(manager.getName()).toBe("Dariel");
});

test("here we're getting the id of the manager",() => {
    expect(manager.getId()).toBe("042222");
});

test("here we're getting the email of the manager",() => {
    expect(manager.getEmail()).toBe("dariel@gmail.com");
});

test,("here we're getting the github of the manager",() => {
    expect(manager.getOfficeNumber()).toBe("422");
});

test("here we're getting the role of the manager",() => {
    expect(manager.getRole()).toBe("Manager")

});