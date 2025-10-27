// src/components/TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css'; // Pastikan CSS form diimpor

function TaskForm({ addTask }) {
    // State untuk input Judul dan Deskripsi
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); 
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Cek jika ada Judul atau Deskripsi sebelum menambahkan tugas
        if (title.trim() || description.trim()) {
            addTask({ title, description }); // Kirim data tugas
            // Reset state
            setTitle('');
            setDescription('');
            setIsExpanded(false);
        }
    };
    
    // Tampilkan tombol "+ Add Task" jika form belum diperluas
    if (!isExpanded) {
        return (
            <button className="add-task-btn" onClick={() => setIsExpanded(true)}>
                + Add Task
            </button>
        );
    }
    
    // Tampilan Form yang diperluas (Card Putih)
    return (
        <form className="task-form-expanded" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                className="task-input-title"
            />
            
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="task-input-description"
            />

            {/* Bagian Actions: Cancel dan Save */}
            <div className="task-form-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsExpanded(false)}>Cancel</button>
                <button type="submit" className="btn-save">Save</button>
            </div>
        </form>
    );
}
export default TaskForm;