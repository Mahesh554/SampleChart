import React from 'react';

const data = {
    "root": {
        "task1": {
            "name": 'BuildFrame',
            "prevTask": '',
            "nextTask": "task2"
        },
        "task2": {
            "name": 'Build Body',
            "prevTask": 'task1',
            "nextTask": "task4"
        },
        "task3": {
            "name": 'Test car',
            "prevTask": 'task4',
            "nextTask": ""
        },
        "task4": {
            "name": 'Fit Tyre',
            "prevTask": 'task2',
            "nextTask": "task3"
        }
    }
}
function ItemList() {
    let reqTask;
    const findFirstItem = (tasks) => {
        let index = 1;
        for (let task in tasks) {
            tasks[task].index = index++;
            tasks[task].task = task;
            if (!tasks[task].prevTask) {
                reqTask = tasks[task];
            }
        }
        return reqTask;
    };

    const addToSeq = (firstItem, data) => {
        let seq = [];
        let item = firstItem;
        while (item) {
            seq.push(item);
            item = data[item.nextTask];
        }
        return seq;
    };

    const firstItem = findFirstItem(data["root"]);
    const itemlist = addToSeq(firstItem, data["root"]);
    return (
        <div className="tasks">
            {
                itemlist.map((item) => <div
                    className="task"
                    key={item.task}
                    style={{
                        top: (item.index) * 80
                    }}><div
                        className="item"
                    >
                        {item.task.toUpperCase()}
                    </div>
                    <div
                        className="item"
                        key={item.name}
                    >
                        {item.name}
                    </div>
                </div>

                )
            }
        </div>
    )
}

export default ItemList;