import React, { useState } from 'react';
import { Crown, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

export default function LoginPage({ onNavigate }) {
    const [playerTag, setPlayerTag] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ playerTag })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                onNavigate('dashboard');
            } else {
                setError(data.message || 'Erro ao realizar login');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-slate-800">
                    <div className="p-8 sm:p-10">
                        <div className="text-center mb-8 cursor-pointer" onClick={() => onNavigate('landing')}>
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 border-4 border-blue-100 text-blue-600 mb-4 shadow-inner">
                                <Crown className="h-10 w-10 text-amber-500 fill-amber-500" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Acesso ao QG</h2>
                            <p className="text-slate-500 font-medium mt-1">Apenas Líderes e Co-líderes</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border-2 border-red-100 rounded-xl flex gap-3 items-center animate-in fade-in zoom-in duration-300">
                                <ShieldCheck className="h-5 w-5 text-red-500 shrink-0" />
                                <p className="text-xs font-bold text-red-600 uppercase leading-snug">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest pl-1">Sua Tag de Jogador</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        value={playerTag}
                                        onChange={(e) => setPlayerTag(e.target.value.toUpperCase())}
                                        className="w-full px-4 py-4 bg-slate-50 rounded-2xl border-2 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-black text-slate-700 uppercase placeholder-slate-300"
                                        placeholder="#YJ08GRQU"
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 font-bold px-1 italic">Não é necessário senha. Validaremos seu cargo via API oficial.</p>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white rounded-2xl py-5 font-black text-lg hover:bg-blue-700 transition-all shadow-lg border-b-8 border-blue-800 active:border-b-0 active:translate-y-1 flex items-center justify-center gap-3 uppercase disabled:opacity-50 disabled:translate-y-0 disabled:border-b-0"
                            >
                                {loading ? (
                                    <>Verificando Cargo <Loader2 className="h-5 w-5 animate-spin" /></>
                                ) : (
                                    <>Validar Acesso <ArrowRight className="h-5 w-5" /></>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="px-8 py-6 bg-slate-50 border-t-2 border-slate-100 text-center">
                        <button
                            onClick={() => onNavigate('landing')}
                            className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 w-full uppercase"
                        >
                            <ArrowRight className="h-4 w-4 rotate-180" /> Recuar para a base
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
