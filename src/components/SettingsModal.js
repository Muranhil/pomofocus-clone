// src/components/SettingsModal.js 
import React from 'react';
import './SettingsModal.css'; // Pastikan CSS modal diimpor

function SettingsModal({ settings, updateSetting, onClose }) {
    
    // Fungsi untuk menutup modal dan dianggap sebagai "Save"
    const handleSave = () => {
        onClose();
    }
    
    return (
        // Modal Backdrop: Lapisan gelap transparan yang menutupi layar
        <div className="modal-backdrop">
            {/* Modal Box: Kotak pop-up putih di tengah */}
            <div className="settings-modal">
                
                {/* Header Modal */}
                <div className="modal-header">
                    <h2>SETTING</h2>
                    {/* Tombol Tutup (X) */}
                    <button className="modal-close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                
                {/* Body Modal (Konten Setting) */}
                <div className="modal-body">
                    <h3 className="setting-section-title">TIMER</h3>
                    
                    {/* Fitur Auto Start Breaks */}
                    <div className="setting-item setting-toggle">
                        <label>Auto Start Breaks</label>
                        <input
                            type="checkbox"
                            checked={settings.autoStartBreaks}
                            onChange={(e) => updateSetting('autoStartBreaks', e.target.checked)}
                        />
                    </div>
                </div>
                
                {/* Footer Modal dengan tombol OK yang menempel di bawah */}
                <div className="modal-footer">
                    {/* Tombol OK untuk menutup modal setelah setting selesai */}
                    <button className="btn-ok" onClick={handleSave}>OK</button>
                </div>
            </div>
        </div>
    );
}
export default SettingsModal;