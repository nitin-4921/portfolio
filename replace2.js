const fs = require('fs');
const p = 'src/app/page.tsx';
let lines = fs.readFileSync(p, 'utf8').split('\n');

// Find start/end line indices (0-based)
let startIdx = -1, endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (startIdx === -1 && lines[i].includes('min-h-[1500px]')) startIdx = i;
  if (startIdx !== -1 && lines[i].includes('</section>') && endIdx === -1) { endIdx = i; break; }
}

if (startIdx === -1 || endIdx === -1) {
  console.log('Boundaries not found'); process.exit(1);
}

const newBlock = `              {/* ═══════ PROJECT ARCHIVE BOARD ═══════ */}
              <div className="relative w-full mt-12 space-y-0">

                {/* ── ROW 1: TEERTHFLOW (flagship, full-width dossier) ── */}
                <div className="relative group" style={{zIndex:10}}>
                  {/* Pin / tape at top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/20 border border-white/40 shadow-lg z-20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-lime-green"></div>
                  </div>
                  {/* Paper sheet */}
                  <div className="bg-[#0f0f0f] border border-lime-green/40 shadow-[0_8px_40px_rgba(212,255,63,0.08)] rotate-[-0.6deg] group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    {/* Header bar */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-lime-green/20 bg-[#111]">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-lime-green animate-pulse"></span>
                        <span className="font-mono text-[10px] text-lime-green tracking-[0.25em] uppercase">COMMAND CENTER REPORT // AI MONITORING DOSSIER</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] text-white/30">SYS_ID: 01 · 2026</span>
                        <span className="font-mono text-[8px] text-lime-green border border-lime-green/40 px-2 py-0.5 bg-lime-green/10">● ACTIVE</span>
                      </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Left: Title + desc */}
                      <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                        <div>
                          <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2">PROJECT_01 // FLAGSHIP</div>
                          <h3 className="font-syne font-black text-4xl md:text-6xl text-white uppercase leading-none tracking-tighter mb-1">TEERTH<span className="text-lime-green">FLOW</span></h3>
                          <p className="font-mono text-[10px] text-lime-green/70 mb-4">Deep Learning Crowd Management for Mass Gatherings</p>
                          <p className="font-sans text-sm text-white/65 leading-relaxed">CNN-based crowd density estimation trained on 10,000+ annotated images. Spatiotemporal LSTM forecasting predicts crowd surges 10–15 min ahead. Real-time heatmap dashboard via WebSocket at 24 FPS on edge hardware.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Python","TensorFlow","React.js","Node.js","IoT","OpenCV"].map(t => (
                            <span key={t} className="font-mono text-[8px] text-white/50 border border-white/10 px-2 py-0.5 uppercase">{t}</span>
                          ))}
                        </div>
                      </div>
                      {/* Center: Heatmap viz */}
                      <div className="lg:col-span-4 relative h-56 border border-lime-green/15 bg-black overflow-hidden group-hover:border-lime-green/40 transition-colors">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice">
                          <defs>
                            <radialGradient id="c1" cx="25%" cy="35%"><stop offset="0%" stopColor="#D4FF3F" stopOpacity="0.7"/><stop offset="100%" stopColor="#D4FF3F" stopOpacity="0"/></radialGradient>
                            <radialGradient id="c2" cx="65%" cy="55%"><stop offset="0%" stopColor="#FF3333" stopOpacity="0.6"/><stop offset="100%" stopColor="#FF3333" stopOpacity="0"/></radialGradient>
                            <radialGradient id="c3" cx="80%" cy="25%"><stop offset="0%" stopColor="#FF8800" stopOpacity="0.5"/><stop offset="100%" stopColor="#FF8800" stopOpacity="0"/></radialGradient>
                          </defs>
                          <rect width="300" height="220" fill="#050505"/>
                          <rect width="300" height="220" fill="url(#c1)"/>
                          <rect width="300" height="220" fill="url(#c2)"/>
                          <rect width="300" height="220" fill="url(#c3)"/>
                          <line x1="0" y1="55" x2="300" y2="55" stroke="rgba(212,255,63,0.07)" strokeWidth="1"/>
                          <line x1="0" y1="110" x2="300" y2="110" stroke="rgba(212,255,63,0.07)" strokeWidth="1"/>
                          <line x1="0" y1="165" x2="300" y2="165" stroke="rgba(212,255,63,0.07)" strokeWidth="1"/>
                          <line x1="75" y1="0" x2="75" y2="220" stroke="rgba(212,255,63,0.07)" strokeWidth="1"/>
                          <line x1="150" y1="0" x2="150" y2="220" stroke="rgba(212,255,63,0.07)" strokeWidth="1"/>
                          <line x1="225" y1="0" x2="225" y2="220" stroke="rgba(212,255,63,0.07)" strokeWidth="1"/>
                          <circle cx="75" cy="77" r="3" fill="#D4FF3F" opacity="0.9"/>
                          <circle cx="195" cy="121" r="3" fill="#FF3333" opacity="0.9" className="animate-ping"/>
                          <circle cx="240" cy="55" r="3" fill="#FF8800" opacity="0.9"/>
                        </svg>
                        <div className="absolute top-2 left-2 font-mono text-[8px] text-lime-green/60">CROWD_HEATMAP · LIVE</div>
                        <div className="absolute bottom-2 right-2 font-mono text-[8px] text-white/30">24 FPS · EDGE_NODE</div>
                      </div>
                      {/* Right: Metric stickers */}
                      <div className="lg:col-span-3 flex flex-col gap-2">
                        <div className="bg-lime-green text-black font-syne font-black text-sm px-3 py-2 rotate-[-1.5deg] shadow-md self-start uppercase">★ FLAGSHIP</div>
                        <div className="bg-zinc-900 border border-white/10 p-3 mt-1">
                          <div className="font-mono text-[8px] text-white/40 uppercase">AI ACCURACY</div>
                          <div className="font-syne font-black text-2xl text-lime-green">91%</div>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-3">
                          <div className="font-mono text-[8px] text-white/40 uppercase">Dataset</div>
                          <div className="font-mono text-sm text-white font-bold">10K+ IMAGES</div>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-3">
                          <div className="font-mono text-[8px] text-white/40 uppercase">Architecture</div>
                          <div className="font-mono text-xs text-white font-bold">CNN + LSTM</div>
                        </div>
                        <a href="#" className="mt-auto border border-lime-green/50 text-lime-green hover:bg-lime-green hover:text-black font-mono text-[9px] py-2 text-center transition-colors uppercase tracking-wider">
                          OPEN_CASE_FILE ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── ROW 2: POTHOLE (left) + FACEAFFECT (right), overlapping ── */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0 mt-8 md:mt-0 md:-mt-6">

                  {/* ── PROJECT 02: SMART POTHOLE DETECTION ── */}
                  <div className="col-span-1 md:col-span-6 relative group" style={{zIndex:20}}>
                    <div className="absolute -top-3 left-10 w-5 h-5 rounded-full bg-blue-500/30 border border-blue-400/50 z-30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="bg-[#09090c] border border-blue-500/30 shadow-[6px_6px_30px_rgba(48,79,254,0.15)] rotate-[1.2deg] group-hover:rotate-0 transition-transform duration-500 overflow-hidden md:mr-[-30px]">
                      {/* Stamp */}
                      <div className="absolute top-5 right-5 border-2 border-orange-500/60 text-orange-500/60 font-syne font-black text-[9px] px-2 py-1 rotate-[12deg] uppercase z-10 tracking-widest">FIELD_REPORT</div>
                      <div className="px-5 py-4 border-b border-blue-500/15 bg-[#0a0a10]">
                        <div className="font-mono text-[9px] text-blue-400 tracking-widest uppercase mb-1">INFRASTRUCTURE REPORT // ROAD INTELLIGENCE</div>
                        <h3 className="font-syne font-black text-2xl md:text-3xl text-white uppercase leading-none">SMART POTHOLE<br/><span className="text-blue-400">DETECTION</span></h3>
                      </div>
                      <div className="p-5">
                        <p className="font-sans text-xs text-white/60 leading-relaxed mb-4">MobileNetV2 classifier on accelerometer + vibration sensor streams. 93% detection accuracy across 4 severity classes. GPS-tagged geospatial heatmap with sub-200ms REST API inference.</p>
                        {/* Road heatmap mini */}
                        <div className="relative h-32 border border-white/8 bg-black mb-4 overflow-hidden group-hover:border-blue-500/40 transition-colors">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 130" preserveAspectRatio="xMidYMid slice">
                            <rect width="300" height="130" fill="#050508"/>
                            <rect x="0" y="55" width="300" height="20" fill="rgba(48,79,254,0.08)"/>
                            <line x1="0" y1="65" x2="300" y2="65" stroke="#304FFE" strokeWidth="1.5" strokeDasharray="12 8"/>
                            <circle cx="60" cy="65" r="7" fill="none" stroke="#FF6600" strokeWidth="1.5" opacity="0.7"/>
                            <circle cx="60" cy="65" r="3" fill="#FF6600" opacity="0.9"/>
                            <circle cx="130" cy="68" r="5" fill="none" stroke="#FF3300" strokeWidth="1.5" opacity="0.8"/>
                            <circle cx="130" cy="68" r="2" fill="#FF3300" opacity="0.9"/>
                            <circle cx="210" cy="62" r="9" fill="none" stroke="#FF9900" strokeWidth="1.5" opacity="0.6"/>
                            <circle cx="210" cy="62" r="4" fill="#FF9900" opacity="0.8"/>
                            <path d="M 0 65 L 60 65 L 130 68 L 210 62 L 300 65" fill="none" stroke="rgba(255,102,0,0.3)" strokeWidth="1"/>
                          </svg>
                          <div className="absolute top-1.5 left-2 font-mono text-[7px] text-blue-400/70">GPS_TRACK · ACTIVE</div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-orange-500 text-black font-mono text-[8px] px-2 py-0.5 font-bold rotate-1">MAINTENANCE_REQ</span>
                          <span className="border border-blue-400/30 text-blue-400 font-mono text-[8px] px-2 py-0.5">93% ACCURACY</span>
                          <span className="border border-white/15 text-white/50 font-mono text-[8px] px-2 py-0.5">REAL-TIME</span>
                        </div>
                        <a href="#" className="block w-full border border-blue-500/40 text-blue-400 hover:bg-blue-500 hover:text-white text-center font-mono text-[9px] py-2 transition-colors uppercase">ACCESS_DATA ↗</a>
                      </div>
                    </div>
                  </div>

                  {/* ── PROJECT 03: FACEAFFECT ── */}
                  <div className="col-span-1 md:col-span-6 relative group mt-8 md:mt-12" style={{zIndex:15}}>
                    <div className="absolute -top-3 right-12 w-5 h-5 rounded-full bg-white/15 border border-white/30 z-30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                    </div>
                    <div className="bg-[#111] border border-white/15 shadow-[0_6px_30px_rgba(0,0,0,0.5)] -rotate-[1.2deg] group-hover:rotate-0 transition-transform duration-500 overflow-hidden md:ml-[-30px]">
                      {/* Yellow post-it sticker */}
                      <div className="absolute top-0 right-8 w-16 h-20 bg-yellow-400/15 border-l border-b border-yellow-400/20 z-10" style={{clipPath:'polygon(0 0,100% 0,100% 80%,80% 100%,0 100%)'}}></div>
                      <div className="px-5 py-4 border-b border-white/8">
                        <div className="font-mono text-[9px] text-white/35 uppercase tracking-widest mb-1">BIOMETRIC ANALYSIS FILE // AI RESEARCH</div>
                        <h3 className="font-syne font-bold text-2xl md:text-3xl text-white uppercase leading-none">FACE<span className="text-white/50">AFFECT</span></h3>
                        <p className="font-mono text-[9px] text-white/30 mt-1">Real-Time Facial Emotion Recognition</p>
                      </div>
                      <div className="p-5">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Face scan graphic */}
                          <div className="shrink-0 w-16 h-16 relative border border-dashed border-white/20 bg-black flex items-center justify-center">
                            <svg className="w-10 h-10 text-white/40 group-hover:text-white/70 transition-colors" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
                              <circle cx="30" cy="30" r="22"/>
                              <circle cx="22" cy="26" r="3"/>
                              <circle cx="38" cy="26" r="3"/>
                              <path d="M 22 38 Q 30 44 38 38"/>
                              <line x1="0" y1="15" x2="8" y2="15" strokeWidth="0.5" opacity="0.4"/>
                              <line x1="0" y1="30" x2="6" y2="30" strokeWidth="0.5" opacity="0.4"/>
                              <line x1="52" y1="15" x2="60" y2="15" strokeWidth="0.5" opacity="0.4"/>
                              <line x1="54" y1="30" x2="60" y2="30" strokeWidth="0.5" opacity="0.4"/>
                            </svg>
                            <div className="absolute inset-0 border border-white/5 scale-110"></div>
                          </div>
                          <p className="font-sans text-xs text-white/55 leading-relaxed">Hybrid CNN-Transformer architecture across 7 emotion classes. ResNet-18 + multi-head self-attention. ONNX-quantized for real-time CPU inference.</p>
                        </div>
                        <div className="space-y-1.5 mb-4">
                          {[["ACCURACY","87.4%"],["INFERENCE","30 FPS"],["ARCHITECTURE","CNN + TRANSFORMER"],["CLASSES","7 EMOTIONS"]].map(([k,v]) => (
                            <div key={k} className="flex justify-between font-mono text-[9px] border-b border-white/5 pb-1">
                              <span className="text-white/35">{k}</span>
                              <span className="text-white font-bold">{v}</span>
                            </div>
                          ))}
                        </div>
                        <a href="#" className="font-mono text-[9px] text-white/60 hover:text-white underline decoration-white/20 hover:decoration-white transition-colors uppercase tracking-wider">
                          [ READ_RESEARCH_DOCUMENT ] ↗
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

                {/* ── ROW 3: ISSUETRACK (full-width engineering board) ── */}
                <div className="relative group mt-8 md:mt-4" style={{zIndex:25}}>
                  <div className="absolute -top-3 left-1/3 w-5 h-5 rounded-full bg-white/10 border border-white/25 z-30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                  </div>
                  <div className="bg-zinc-900 border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.6)] rotate-[0.4deg] group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    <div className="flex items-center gap-2 px-6 py-3 border-b border-white/8 bg-zinc-950">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <span className="font-mono text-[9px] text-white/25 ml-2 uppercase tracking-widest">ENGINEERING WORKFLOW BOARD // DEVOPS SYSTEM</span>
                      <div className="ml-auto">
                        <svg className="w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-4">
                        <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2">PROJECT_04 // MERN STACK</div>
                        <h3 className="font-syne font-black text-3xl md:text-4xl text-white uppercase leading-none mb-3">ISSUE<span className="text-white/40">TRACK</span></h3>
                        <p className="font-sans text-xs text-white/55 leading-relaxed mb-4">Production-grade issue tracking platform with multi-user environments. JWT auth with role-based access control for admin, developer, and viewer roles.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="border border-lime-green/30 text-lime-green/70 font-mono text-[8px] px-2 py-0.5">JWT AUTH</span>
                          <span className="border border-white/15 text-white/50 font-mono text-[8px] px-2 py-0.5">MERN STACK</span>
                          <span className="border border-white/15 text-white/50 font-mono text-[8px] px-2 py-0.5">15+ COMPONENTS</span>
                          <span className="border border-white/15 text-white/50 font-mono text-[8px] px-2 py-0.5">REST API</span>
                        </div>
                        <a href="#" className="inline-block border border-white/25 text-white hover:bg-white hover:text-black font-mono text-[9px] px-4 py-2 transition-colors uppercase tracking-wider">VIEW_REPOSITORY ↗</a>
                      </div>
                      {/* Kanban board visual */}
                      <div className="md:col-span-8">
                        <div className="font-mono text-[8px] text-white/25 uppercase mb-2 tracking-widest">SPRINT_BOARD · LIVE</div>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            {label:"TODO",color:"border-white/15",items:["Auth module","Dashboard","Reports"]},
                            {label:"IN PROGRESS",color:"border-blue-500/30",items:["Issue tracker","Sprint view"]},
                            {label:"DONE",color:"border-lime-green/30",items:["Login flow","JWT setup","Role system","REST APIs","DB schema"]},
                          ].map(col => (
                            <div key={col.label} className={"border " + col.color + " p-2"}>
                              <div className="font-mono text-[7px] text-white/30 uppercase mb-2 tracking-wider">{col.label}</div>
                              <div className="space-y-1">
                                {col.items.map(it => (
                                  <div key={it} className="bg-white/5 border border-white/8 px-1.5 py-1">
                                    <span className="font-mono text-[7px] text-white/50">{it}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>`;

const result = [...lines.slice(0, startIdx), newBlock, ...lines.slice(endIdx + 1)];
fs.writeFileSync(p, result.join('\n'));
console.log(`Replaced lines ${startIdx}–${endIdx}. Done.`);
