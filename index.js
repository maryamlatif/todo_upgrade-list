#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
//Welcome message print
console.log(chalk.bold.rgb(204, 204, 204)("\n\t <<<<<<================================>>>>>>"));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<<<========>>>>> ${chalk.bold.hex("49999ff")("Welcome to code with maryam - Todo_list")}   <<<<<========>>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)("\n\t <<<<<<================================>>>>>>"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "Choice",
                type: "list",
                message: "Please Select an option!",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "Check Todo List",
                    "Exit",
                ],
            },
        ]);
        if (option.Choice === "Add Task") {
            await addtask();
        }
        else if (option.Choice === "Delete Task") {
            await deletetask();
        }
        else if (option.Choice === "Update Task") {
            await Updatetask();
        }
        else if (option.Choice === "Check Todo List") {
            await viewTask();
        }
        else if (option.Choice === "Exit") {
            conditions = false;
        }
    }
};
//Function to add new task to the list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        { name: "task", type: "input", message: "Enter your new task" },
    ]);
    todolist.push(newtask.task);
    console.log(`\n${newtask.task} Task Added successfully in Todo-List`);
};
//Function to view all Todo List Task
let viewTask = () => {
    console.log("\n your Todo-List:\n");
    todolist.forEach((task, index) => console.log(`${index + 1},${task}`));
};
//Function to Delet a task from the list
let deletetask = async () => {
    await viewTask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to delete",
        },
    ]);
    let deletedTask = todolist.splice(taskindex.index, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully`);
};
//Function to add new task to the list
let Updatetask = async () => {
    await viewTask();
    let Updatetsk_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update",
        },
        { name: "new_task", type: "input", message: "Now enter new task name " },
    ]);
    todolist[Updatetsk_index.index - 1] = Updatetsk_index.new_task;
    console.log(`\n Task add index no${Updatetsk_index.index - 1}update successfully[for update list check option:view todo-list"]`);
};
main();
