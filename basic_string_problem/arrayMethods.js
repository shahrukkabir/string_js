/*

const toDoList = [
    "Buy groceries",
    "Complete project",
    "Exercise",
    "Read a book",
    "Attend meeting"
];

*/
/* 
   Task 1 :
   You realize that you forgot to add "walk the dog" to your 
   to-do list. Add it to the list.
*/

const toDoList = [
    "Buy groceries",
    "Complete project",
    "Exercise",
    "Read a book",
    "Attend meeting"
];

toDoList.push("Walk the dog");

// Task 2: You receive a call, and you need to attend an emergency meeting. Remove the "Attend meeting" task from your list.

if (toDoList.includes("Attend meeting")) {

    const indexOfMeeting = toDoList.indexOf("Attend meeting");

    toDoList.splice(indexOfMeeting, 1);

}

//Tasks 3 : You want to take a break and do something relaxing. Extract the tasks related relaxation (index 2 to index 4, inclusive) into a new array called relaxationTasks.

const relaxationTasks = toDoList.slice(2, 5);

// Task 4: You want to check if "Buy groceries" is still on your list. If it is, mark it as completed by removing it.

if (toDoList.includes("Buy groceries")) {

    const indexOfGroceries = toDoList.indexOf("Buy groceries");

    toDoList.splice(indexOfGroceries, 1);
}

// Task 5: You receive a new task, "Call a friend," but you're not sure if it's already on your list. Check if it's there. If not, add it.

if (!toDoList.includes("Call a friend")) {

    toDoList.push("Call a friend");

}

console.log(toDoList);
console.log(relaxationTasks);

