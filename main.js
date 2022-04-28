// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// delete버튼을 누르면 할일이 삭제된다
// check버튼을 누르면 할일이 끝나고 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 true false
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안끝난걸로 2간주하고 그대로

// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴
// 문제1
// let store = {
//     name: "noona's fruit store",
//     fruits: ["banana","apple","mango"],
//     locations: "seoul"
// }
// let {name, fruits, locations} = store;
// //문제2
// console.log(`제 가게 이름은 ${name}입니다. 위치는 ${locations}에 있습니다.`);

// 문제3
// function calculate(obj) {
//     let {a,b,c} = obj;
//     return a+b+c;
// }
// console.log(calculate({a:1,b:2,c:3}));

// 문제4
// let name = "noona store"
// let fruits = ["banana","apple","mango"]
// let address = {
//     country: "Korea",
//     city: "Seoul"
// }
// function findStore(obj) {
//     let {name,address:{city}} = obj;
//     return name === "noona store" && city === "Seoul"
// }
// console.log(findStore({name,fruits, address}))

// 문제5
// function getNumber() {
//     let array = [1,2,3,4,5,6]
//     let [first,, third, fourth] = array;
//     return {first, third, fourth};
// }
// console.log(getNumber())

// 문제6
// function getCalendar(first, ...rest) {
//     return (
//         first === "January" &&
//             rest[0] === "February" &&
//             rest[1] === "March" &&
//             rest[2] === undefined
//     );
// }
// console.log(getCalendar("January", "February", "March"));

// 문제7
// const getMinimun = () => {
//     let a = [45,23,78]
//     let b = [54,11,9]
//     return Math.min(...a,...b)
// }
// console.log(getMinimun())

// 문제8
// function sumNumber() {
//     const sum = (a,b) => a+b;
//     return sum(40,10);
// }

// 문제9
// function sumNumber() {
//     let addNumber = (a) => (b) => (c) => a+b+c;
//     return addNumber(1)(2)(3);
// }
// console.log(sumNumber());

//배열 문제
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];
//문제 map 1
// let upper = names.map((item)=> item.toUpperCase())
// console.log(upper);

//문제 map 2
// let upper = names.map((item)=> item.)

//문제 map 3
// let upper = names.map((item) => item.startsWith(item))
// console.log(upper);

//문제 filter 1
// let upper = names.filter((item) => item.includes("a"))
// console.log(upper);

//문제 filter 2
// let upper = names.filter((item) => item.includes(item.))
// console.log(upper);

let taskInput = document.getElementById("task-input");
let plusAdd = document.getElementById('plus');
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let taskList = [];
let filterList = [];
plusAdd.addEventListener('click', addTask);
taskInput.addEventListener('focus', function(){taskInput.value = ''});

for(let i=1; i<tabs.length; i++) {
    tabs[i].addEventListener("click", function(event){filter(event)});
}

function filter(event) {
    mode = event.target.id
    filterList = [];

    document.getElementById("under-line").style.width =
        event.target.offsetWidth + "px";
    document.getElementById("under-line").style.top =
        event.target.offsetTop -4 + event.target.offsetHeight + "px";
    document.getElementById("under-line").style.left =
        event.target.offsetLeft + "px";

    if(mode === "all") {
        render();
    }   else if(mode === "ongoing") {
        for(let i=0; i < taskList.length; i++) {
            if(taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }
        render();
    }   else if(mode === "done") {
        for(let i=0; i< taskList.length; i++) {
            if(taskList[i].isComplete === true) {
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}

function addTask() {
    let task = {
        id: randomID(),
        taskContent: taskInput.value,
        isComplete: false
    }

    taskList.push(task);
    console.log(taskList);
    render();
}

function render() {
    let list = [];
    if(mode === "all") {
        list = taskList;
    } else if(mode === "ongoing" || mode === "done") {
        list = filterList;
    }

    let resultHTML = '';
    for(let i =0; i < list.length; i++) {
        if(list[i].isComplete === true) {
            resultHTML += `<div class="task">
                    <div class="task-done">${list[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${list[i].id}')">Check</button>
                        <button onclick="deleteTask('${list[i].id}')">Delete</button>
                    </div>
                </div>`
        } else {
        resultHTML += `<div class="task">
                    <div>${list[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${list[i].id}')">Check</button>
                        <button onclick="deleteTask('${list[i].id}')">Delete</button>
                    </div>
                </div>`;
        }
    }


    document.getElementById('task-board').innerHTML = resultHTML;
}

function toggleComplete(id) {
    console.log("id", id);
    for(let i=0; i < taskList.length; i++) {
        if(taskList[i].id === id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}
function deleteTask(id) {
    for(let i=0; i < taskList.length; i++){
        if(taskList[i].id === id) {
            taskList.splice(i,1);
            break;
        }
    }
    render();
}

function randomID() {
    return '_' + Math.random().toString(36).substr(2,9);
}