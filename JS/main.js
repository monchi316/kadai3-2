'use strict'
{
  // HTML要素の取得
  const btn = document.getElementById('btn');
  const tasks = [];
  const taskForm = document.getElementById('taskForm');
  const tbody = document.querySelector('tbody');
  const rebtn = document.getElementsByName('rebtn');
  // ↓クリックイベント↓
  // 追加ボタン
  btn.addEventListener('click', () => {
    if (taskForm.value) {
      addTask();
    }
  });

  // ラジオボタン

  // ↓関数定義↓
  // タスク追加時の処理内容
  const addTask = () => {
    const task = {
      idNumber: '',
      taskName: taskForm.value,
      status: { 0: '作業中', 1: '完了' },
    }
    tasks.push(task);
    // タスク生成時の処理内容
    const createTask = () => {
      tbody.innerHTML = '';
      tasks.forEach((task, index) => {
        // 必要な要素生成定義
        const tr = document.createElement('tr');
        const itd = document.createElement('td');
        const ttd = document.createElement('td');
        const std = document.createElement('td');
        const rtd = document.createElement('td');
        const statusbtn = document.createElement('button');
        const removebtn = document.createElement('button');
        // 生成要素の配置処理
        tbody.appendChild(tr);
        tr.appendChild(itd);
        tr.appendChild(ttd);
        tr.appendChild(std);
        tr.appendChild(rtd);
        std.appendChild(statusbtn);
        rtd.appendChild(removebtn);
        tr.className = 'working';
        itd.textContent = index;
        ttd.textContent = task.taskName;
        statusbtn.textContent = task.status[0];
        removebtn.textContent = '削除';
        // 削除ボタン
        removebtn.addEventListener('click', () => {
          re();
          createTask();
        });
      });
    };
    createTask();
    taskForm.value = '';
  }
  // 削除処理内容
  const re = () => {
    const removetr = event.target.parentNode.parentNode;
    const number = removetr.firstChild.innerHTML;
    tasks.splice(number, 1);
  }
}