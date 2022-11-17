const Intern = require ("../lib/Intern");
const Intern = new Intern ("Dariel", "042222", "dariel@gmail.com", "Hunter College")

test("values for engineer will be fed in",() => {
    expect(engineer.name).toBe("Dariel");
    expect(engineer.id).toBe("042222");
    expect(engineer.email).toBe("dariel@gmail.com");
    expect(engineer.github).toBe("darielgetshub");
});

test("here we're getting the name of the manager",() => {
    expect(intern.getName()).toBe("Dariel");
});

test("here we're getting the id of the manager",() => {
    expect(intern.getId()).toBe("042222");
});

test("here we're getting the email of the manager",() => {
    expect(intern.getEmail()).toBe("dariel@gmail.com");
});

test("here we're getting the school of the manager",() => {
    expect(intern.getOfficeNumber()).toBe("Hunter College");
});

test("here we're getting the role of the manager",() => {
    expect(intern.getRole()).toBe("Intern")

});