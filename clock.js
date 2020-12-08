(function getTodayTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector('.date').innerText = `${hour}:${minute}:${second}`
    setTimeout(getTodayTime, 1000);
})();

function greeting() {
    const userName = document.querySelector('#userName').value;
    document.querySelector('.userGreeting').innerText = `안녕하세요. ${userName}님!`;
    document.querySelector('.list').style.display = 'block';

    document.querySelector('#toDoList').focus();
}

function makingToDoList() {
    const toDoList = document.querySelector('#toDoList').value;

    const itemList = document.querySelector('.itemList');
    const addingPTag = document.createElement("li");
    const addingItem = document.createTextNode(`${toDoList}`);

    addingPTag.className = 'items'

    addingPTag.appendChild(addingItem);
    itemList.appendChild(addingPTag);

    document.querySelector('#toDoList').value = '';

    addingDeleteButton();
    deleteItems();
    completeItems();
}

function addingDeleteButton () {
    const addingSpanTag = document.createElement("span");
    const addingSymbol = document.createTextNode('\u00D7');
    const selectItemList = document.querySelectorAll('.items');

    if (document.querySelectorAll('.items')) {
        addingSpanTag.className = 'deleteButtons'
        addingSpanTag.appendChild(addingSymbol);
            for (let i = 0; i < selectItemList.length; i++) {
                selectItemList[i].appendChild(addingSpanTag)
            }
    }
}

function deleteItems() {
    const items = document.querySelectorAll('.deleteButtons');

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function deleteItem(e) {
            e.target.parentNode.remove();
        })
    }
}

function completeItems() {
    const finishedItems = document.querySelectorAll('.items');

    for (let j = 0; j < finishedItems.length; j++) {
        if (finishedItems[j].classList.length < 2) {
            finishedItems[j].addEventListener('click', function completeItem(e) {
            e.target.classList.add('checked')
            });
         } else if (finishedItems[j].classList.length > 1) {
            finishedItems[j].addEventListener('click', function uncompleteItem(e) {
            e.target.classList.remove('checked')
            });
        }

        // finishedItems[j].addEventListener('click', function completeItem(e) {
        //         e.target.classList.toggle('checked')
        // });
    }
}


// text-decoration-line: line-through;

// 참조: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo