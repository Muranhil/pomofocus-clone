// src/App.js (Sudah disempurnakan & DIKOREKSI)
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import TaskList from './components/TaskList'; 
import SettingsModal from './components/SettingsModal'; 
import './App.css'; 

// Durasi waktu
const MODES = {
    pomodoro: 25 * 60,
    'shortBreak': 5 * 60,
    'longBreak': 15 * 60,
};

function App() {
    // State Timer
    const [mode, setMode] = useState('pomodoro');
    const [waktu, setWaktu] = useState(MODES.pomodoro);
    const [isAktif, setIsAktif] = useState(false);
    
    // State Tasks
    const [tasks, setTasks] = useState([]); 

    // State Settings
    const [settings, setSettings] = useState({
        autoStartBreaks: false,
    });
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); 

    // Fungsi untuk mengupdate setting
    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    }

    // --- HANDLER FUNGSI TASKS ---
    const addTask = (taskData) => {
        const newTask = {
            id: Date.now(), 
            title: taskData.title,
            description: taskData.description, 
            estPomos: 1, 
            actPomos: 0,
            isCompleted: false,
        };
        setTasks([newTask, ...tasks]);
    };
    
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id 
            ? { ...task, isCompleted: !task.isCompleted } 
            : task
        ));
    };

    // --- LOGIKA PERUBAHAN BACKGROUND BODY ---
    useEffect(() => {
        // Mengatur class body berdasarkan mode (untuk tema warna)
        document.body.className = mode;
        return () => {
            document.body.className = '';
        }
    }, [mode]); 

    return (
        <div className="App">
            <header>
                <h1>Pomofocus</h1> 
                {/* Tombol Setting */}
                <button className="settings-btn" onClick={() => setIsSettingsOpen(true)}>
                    Setting
                </button>
            </header>

            <main className="app-main">
                <Timer 
                    // Meneruskan semua props yang diperlukan oleh Timer.js
                    mode={mode}
                    setMode={setMode} 
                    waktu={waktu}
                    setWaktu={setWaktu}
                    isAktif={isAktif}
                    setIsAktif={setIsAktif}
                    MODES={MODES} 
                    settings={settings} 
                />
                
                <TaskList 
                    tasks={tasks} 
                    deleteTask={deleteTask} 
                    addTask={addTask} 
                    toggleTaskCompletion={toggleTaskCompletion} 
                />
                
                <div className="pomo-info">
                   {/* Konten info Pomos */}
                </div>

            </main>
            
            {/* Modal Setting */}
            {isSettingsOpen && (
                <SettingsModal 
                    settings={settings}
                    updateSetting={updateSetting}
                    onClose={() => setIsSettingsOpen(false)}
                />
            )}
        </div>
    );
}

export default App;