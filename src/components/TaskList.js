// src/components/TaskList.js
import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

// Menerima semua props yang diperlukan untuk TaskList
function TaskList({ tasks, deleteTask, addTask, toggleTaskCompletion }) { 
    return (
        <div className="tasks-container">
            <div className="tasks-header">
                <h2>Tasks</h2>
                {/* Tombol menu (3 titik) bisa ditambahkan di sini */}
            </div>
            
            <div className="tasks-list">
                {tasks.map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask} 
                        // Meneruskan fungsi toggle completion ke komponen Task
                        toggleTaskCompletion={toggleTaskCompletion} 
                    />
                ))}
            </div>
            
            {/* Tambahkan TaskForm di bawah list tugas */}
            <TaskForm addTask={addTask} />
        </div>
    );
}
export default TaskList;