const Engineer = require("./lib/Engineer");
const engineer = new Engineer ("Dariel", "042222", "dariel@gmail.com","darielgetshub")

test("values for engineer will be fed in",() => {
    expect(engineer.name).toBe("Dariel");
    expect(engineer.id).toBe("042222");
    expect(engineer.email).toBe("dariel@gmail.com");
    expect(engineer.github).toBe("darielgetshub");
});

test("here we're getting the name of the engineer",() => {
    expect(engineer.getName()).toBe("Dariel");
});

test("here we're getting the id of the engineer",() => {
    expect(engineer.getId()).toBe("042222");
});

test("here we're getting the email of the engineer",() => {
    expect(engineer.getEmail()).toBe("dariel@gmail.com");
});

test("here we're getting the github of the engineer",() => {
    expect(engineer.getGitHub()).toBe("darielgetshub");
});

test("here we're getting the role of the engineer",() => {
    expect(engineer.getRole()).toBe("Engineer")
});