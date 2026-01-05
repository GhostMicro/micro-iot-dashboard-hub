'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bot, Save, RefreshCcw,
    Trash2, Cpu, ChevronLeft, Brain,
    Sparkles, History, Lock, User
} from 'lucide-react';
import { io, Socket } from 'socket.io-client';
import Link from 'next/link';

const GHOST_SECRET = "GHOST_99_ALPHA";

export default function NeuroLab() {
    const [socket, setSocket] = React.useState<Socket | null>(null);
    const [personas, setPersonas] = React.useState<any>({});
    const [memories, setMemories] = React.useState<any>({});
    const [selectedId, setSelectedId] = React.useState<string | null>("0");
    const [editPersona, setEditPersona] = React.useState<any>(null);
    const [saving, setSaving] = React.useState(false);

    React.useEffect(() => {
        const newSocket = io('http://localhost:8000', { auth: { token: GHOST_SECRET } });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            newSocket.emit('get_personas');
            newSocket.emit('get_memories');
        });

        newSocket.on('personas_list', (data) => setPersonas(data));
        newSocket.on('memories_list', (data) => setMemories(data));

        return () => { newSocket.close(); };
    }, []);

    React.useEffect(() => {
        if (selectedId && personas[selectedId]) {
            setEditPersona({ ...personas[selectedId], id: selectedId });
        }
    }, [selectedId, personas]);

    const handleUpdate = () => {
        if (!socket || !editPersona) return;
        setSaving(true);
        socket.emit('update_persona', editPersona);
        setTimeout(() => {
            setSaving(false);
            socket.emit('get_personas');
        }, 500);
    };

    const clearAllMemories = () => {
        if (socket && confirm("Purge all neural memories? This cannot be undone.")) {
            socket.emit('clear_memories');
        }
    };

    if (!personas["0"]) return (
        <div className="min-h-screen bg-[#020202] flex items-center justify-center text-cyan-500 font-mono tracking-widest animate-pulse">
            SYNCING_WITH_GENESIS_CORE...
        </div>
    );

    return (
        <main className="min-h-screen relative p-10 flex flex-col items-center overflow-hidden">
            <div className="hub-bg" />
            <div className="hub-grid opacity-20" />
            <div className="scanline" />

            {/* Header */}
            <header className="w-full max-w-7xl flex justify-between items-center mb-16 relative z-10">
                <Link href="/" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Back to Hub</span>
                </Link>
                <div className="text-center">
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase text-white">
                        Neuro_Config<span className="text-cyan-400">urator</span>
                    </h1>
                    <p className="text-[8px] font-black uppercase tracking-[0.6em] text-cyan-500/40 mt-2">Distributed Architecture // Genesis Core</p>
                </div>
                <div className="w-32" />
            </header>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">

                {/* Sidebar: AI Slots */}
                <aside className="md:col-span-3 space-y-4">
                    <div className="flex items-center justify-between mb-6 px-4">
                        <div className="flex items-center gap-2">
                            <Cpu size={16} className="text-cyan-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest">AI_Slots</span>
                        </div>
                        <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[8px] text-cyan-500 font-bold">GENESIS_PRIMARY</div>
                    </div>
                    {Object.entries(personas).map(([id, p]: [string, any]) => (
                        <button
                            key={id}
                            onClick={() => setSelectedId(id)}
                            className={`w-full group p-6 glass-card rounded-3xl flex flex-col gap-2 text-left transition-all
                ${selectedId === id ? 'border-cyan-500/50 bg-cyan-500/10 scale-105' : 'hover:border-white/10'}`}
                        >
                            <div className="flex justify-between items-center text-white/30">
                                <span className="text-[8px] font-bold uppercase tracking-widest">Slot_0{id}</span>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                            </div>
                            <span className={`text-xl font-black italic uppercase tracking-tight
                ${selectedId === id ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                                {p.name}
                            </span>
                        </button>
                    ))}
                </aside>

                {/* Main Editor */}
                <section className="md:col-span-6 space-y-8">
                    <AnimatePresence mode="wait">
                        {editPersona && (
                            <motion.div
                                key={selectedId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="glass-card p-10 rounded-[50px] relative overflow-hidden"
                            >
                                {/* GENESIS CORE IDENTIFIER */}
                                <div className="absolute -top-10 -right-10 opacity-[0.03] select-none pointer-events-none">
                                    <h1 className="text-[180px] font-black italic tracking-tighter">GENESIS</h1>
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h2 className="text-4xl font-black italic uppercase tracking-tighter" style={{ color: editPersona.color }}>
                                                Config_Slot: 0{selectedId}
                                            </h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Lock size={12} className="text-cyan-500/40" />
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Genesis_Active_Node</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleUpdate}
                                            disabled={saving}
                                            className="flex items-center gap-3 bg-cyan-500 text-black px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white active:scale-95 disabled:opacity-50 transition-all shadow-lg shadow-cyan-500/20"
                                        >
                                            {saving ? <RefreshCcw size={16} className="animate-spin" /> : <Save size={16} />}
                                            {saving ? 'Syncing...' : 'Sync to Genesis'}
                                        </button>
                                    </div>

                                    {/* Name Input (The field you asked for) */}
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-4 flex items-center gap-2">
                                            <User size={12} /> AI Persona Name
                                        </label>
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-2xl font-black italic uppercase tracking-tight text-cyan-400 focus:border-cyan-500 outline-none transition-all"
                                            value={editPersona.name}
                                            onChange={(e) => setEditPersona({ ...editPersona, name: e.target.value })}
                                            placeholder="Enter Persona Name..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-4">System Tag</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm font-bold focus:border-cyan-500 outline-none uppercase transition-all"
                                                value={editPersona.tag}
                                                onChange={(e) => setEditPersona({ ...editPersona, tag: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-2">Identity Aura</label>
                                            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl">
                                                <input
                                                    type="color"
                                                    className="w-10 h-10 bg-transparent rounded-xl cursor-pointer border-none"
                                                    value={editPersona.color}
                                                    onChange={(e) => setEditPersona({ ...editPersona, color: e.target.value })}
                                                />
                                                <span className="font-mono text-[10px] text-white/60 uppercase">{editPersona.color}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-4">Instruction Set (The "Soul")</label>
                                        <textarea
                                            rows={6}
                                            className="w-full bg-white/5 border border-white/5 rounded-[32px] p-8 text-sm font-medium focus:border-cyan-500 outline-none leading-relaxed transition-all"
                                            value={editPersona.instruction}
                                            onChange={(e) => setEditPersona({ ...editPersona, instruction: e.target.value })}
                                            placeholder="Define the AI's behavior..."
                                        />
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex justify-end items-center opacity-30">
                                        <div className="flex items-center gap-2">
                                            <Bot size={14} />
                                            <span className="text-[9px] font-black uppercase tracking-widest">Genesis_Intelligence_Module_v8.4</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                {/* Right Info: Memories */}
                <aside className="md:col-span-3 space-y-6">
                    <div className="glass-card p-8 rounded-[40px] space-y-6 h-fit">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <History size={16} className="text-purple-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Neural_History</span>
                            </div>
                            <button
                                onClick={clearAllMemories}
                                className="p-2 text-white/10 hover:text-red-500 transition-colors"
                                title="Wipe Memories"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scroll">
                            {selectedId && memories[selectedId] ? (
                                memories[selectedId].map((m: string, i: number) => (
                                    <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-medium leading-relaxed text-white/40 italic">
                                        "{m}..."
                                    </div>
                                ))
                            ) : (
                                <div className="text-[10px] text-white/10 text-center py-20 italic">No neural data salvaged.</div>
                            )}
                        </div>
                    </div>

                    <div className="p-8 glass-card rounded-[40px] border-l-4 border-cyan-500">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={16} className="text-cyan-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Genesis_Status</span>
                        </div>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase font-black">
                            Genesis is the locked master core. Personas 0-8 are modular masks that can be swapped and renamed.
                        </p>
                    </div>
                </aside>

            </div>

            <footer className="mt-20 mb-10 opacity-10">
                <p className="text-[8px] font-black uppercase tracking-[1em]">GhostMicro Infrastructure // Distributed intelligence layer</p>
            </footer>
        </main>
    );
}
