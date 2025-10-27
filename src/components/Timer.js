// src/components/Timer.js 
import React, { useEffect } from 'react';
import './Timer.css'; // Pastikan CSS timer diimpor

// Fungsi utilitas: Mengubah total detik menjadi format MM:SS
const formatWaktu = (totalDetik) => {
    const menit = Math.floor(totalDetik / 60).toString().padStart(2, '0');
    const detik = (totalDetik % 60).toString().padStart(2, '0');
    return `${menit}:${detik}`;
};

// Menerima semua state dan setter dari App.js sebagai props
function Timer({ mode, setMode, waktu, setWaktu, isAktif, setIsAktif, MODES }) {

    // --- HANDLER FUNGSI ---
    // Mengganti mode timer
    const gantiMode = (newMode) => {
        setMode(newMode);
        setWaktu(MODES[newMode]); // Mengatur waktu awal mode baru
        setIsAktif(false); // Menghentikan timer
    };

    // Toggle Start/Pause
    const handleStartPause = () => {
        setIsAktif(!isAktif);
    };

    // Reset timer ke waktu awal mode saat ini
    const handleReset = () => {
        setIsAktif(false);
        setWaktu(MODES[mode]);
    };


    // --- HOOK useEffect (LOGIKA COUNTDOWN) ---
    useEffect(() => {
        let interval = null;

        if (isAktif && waktu > 0) {
            // Logika Countdown
            interval = setInterval(() => {
                setWaktu(t => t - 1);
            }, 1000);
        } else if (waktu === 0) {
            // Waktu habis
            setIsAktif(false);
            alert(`${mode.toUpperCase()} selesai! Saatnya berganti mode.`);
            setWaktu(MODES[mode]);
        } 
        
        // Membersihkan interval saat komponen di-unmount atau dependencies berubah
        return () => clearInterval(interval);

    // Dependencies array memastikan logika dijalankan saat nilai ini berubah
    }, [isAktif, waktu, mode, setWaktu, MODES, setIsAktif]); 

    // --- TAMPILAN (RENDER) ---
    return (
        <div className={`timer-box ${mode}`}> 
            {/* Pemilih Mode Timer */}
            <div className="mode-selector">
                <button onClick={() => gantiMode('pomodoro')} className={mode === 'pomodoro' ? 'active' : ''}>Pomodoro</button>
                <button onClick={() => gantiMode('shortBreak')} className={mode === 'shortBreak' ? 'active' : ''}>Short Break</button>
                <button onClick={() => gantiMode('longBreak')} className={mode === 'longBreak' ? 'active' : ''}>Long Break</button>
            </div>
            
            {/* Tampilan Waktu */}
            <div className="time-display">{formatWaktu(waktu)}</div>
            
            {/* Tombol Start/Pause */}
            <button className="control-btn" onClick={handleStartPause}>{isAktif ? 'PAUSE' : 'START'}</button>
            
            {/* Tombol Reset */}
            <button className="reset-btn" onClick={handleReset}>RESET</button>
        </div>
    );
}

export default Timer;