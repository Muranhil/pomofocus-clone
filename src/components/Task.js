// src/components/Task.js
import React from 'react';
// import './Task.css'; // Asumsi Anda juga memiliki file Task.css

// Menerima deleteTask dan toggleTaskCompletion sebagai prop
function Task({ task, deleteTask, toggleTaskCompletion }) { 
    
    // Handler untuk menandai tugas selesai/belum selesai
    const handleToggle = () => {
        toggleTaskCompletion(task.id);
    }

    // Handler untuk menghapus tugas
    const handleDelete = () => {
        deleteTask(task.id);
    }
    
    return (
        <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
            <div className="task-main">
                {/* Checkbox */}
                <input 
                    type="checkbox" 
                    checked={task.isCompleted} 
                    onChange={handleToggle} 
                    className="task-checkbox"
                />
                <div className="task-details">
                    <span className="task-title">{task.title}</span>
                    {task.description && <p className="task-description">{task.description}</p>}
                </div>
            </div>
            
            <div className="task-side">
                {/* Tampilan Pomos */}
                <span className="task-pomos">{task.actPomos}/{task.estPomos}</span>
                
                {/* Tombol Hapus */}
                <button 
                    className="task-delete-btn" 
                    onClick={handleDelete}
                    title="Hapus Tugas"
                >
                    &times; {/* Simbol 'x' */}
                </button>
            </div>
        </div>
    );
}
export default Task;