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
//map 1
//모든 이름을 대문자로 바꾸어서 출력하시오.
// let upperCase = names.map((item) => item.toUpperCase());
// console.log(upperCase);

//map 2
//성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// let firstName = names.map((item, index) => {
//     let splitName = item.split(' ');
//     return splitName[0];
// })
// console.log(firstName)

//map 3
//이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
// let initial = names.map((item) => {
//     let splitName = item.split(" ")
//     let ini = '';
//     splitName.forEach((item) => (ini += item[0]))
//     return ini;
//
// })
// console.log(initial)

//filter 1
//이름에 a를 포함한 사람들을 출력하시오.
// let includeA = names.filter((item) => item.includes("a"))
// console.log(includeA)

//filter 2
//이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
// let overlap = names.filter((item, index) => {
//     let split = item.split("")
//     return split.some((letter, index) => letter === split[index + 1])
// })
// console.log(overlap)

//some 1
//전체 이름의 길이가 20자 이상인 사람이 있는가?
// let namesLength = names.some((item) => console.log(item.length<=20))

//some 2
//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
// let secondP = names.some((item) => {
//     let split = item.split(" ")
//     split.pop();
//     return split.some(eachName => eachName.toLocaleLowerCase())
// })
// console.log(secondP)

//every 1
//모두의 전체 이름의 길이가 20자 이상인가?
// console.log(names.every((item) => item.length>=20))

//every 2
//모두의 이름에 a 가 포함되어 있는가?
// console.log(names.every((item) => item.includes("a")))

//find 1
//전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// let namesLength = names.find((item) => item.length>=20)
// console.log(namesLength)

//find 2
//미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
// console.log(names.find(item => item.split(' ').length>=3))

//findIndex 1
//전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// console.log(names.findIndex(item => item.length>=20))

//findIndex 2
//미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
// console.log(names.findIndex((item) => item.split(' ').length>=3))
// ldTppI2IrqmzZ1XRZ2qVZ-WQnQCfNlXwrJq9sSwSYfM


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