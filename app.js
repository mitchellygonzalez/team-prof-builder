const inquierer = require ('inquirer');
const fs = require("fs");
const path = require ("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require (".lib/Manager");
const Engineer = require (".lib/Engineer");
const Intern = require (".lib/Intern");


const createManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },
    )