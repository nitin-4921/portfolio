const fs = require('fs');
const path = require('path');
const p = path.resolve('src/app/page.tsx');
let code = fs.readFileSync(p, 'utf8');

const startString = '<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[340px]">';
const endString = '</section>';
const startIndex = code.indexOf(startString);
const endIndex = code.indexOf(endString, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find boundaries');
  process.exit(1);
}

const newContent = `              <div className="relative w-full min-h-[1500px] md:min-h-[1100px] mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 px-2 md:px-0">
                {/* PROJECT 01: TEERTHFLOW */}
                <div className="col-span-1 md:col-span-8 md:col-start-1 md:row-start-1 relative z-10 group">
                  <div className="absolute inset-0 bg-lime-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="bg-[#0a0a0a] border border-lime-green/30 p-1 md:p-2 rotate-[-1deg] hover:rotate-0 transition-transform duration-500 brutalist-shadow-lime relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/10 backdrop-blur-sm -rotate-2 z-30 border border-white/5"></div>
                    <div className="border-b border-lime-green/20 pb-4 mb-4 bg-[#111] p-4 relative z-20">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="font-mono text-[10px] text-lime-green tracking-widest uppercase mb-1">COMMAND CENTER REPORT // AI MONITORING DOSSIER</div>
                          <h3 className="font-syne font-black text-3xl md:text-5xl text-white uppercase leading-none">TEERTHFLOW</h3>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-[9px] text-white/40 uppercase">SYS_ID: 01</div>
                          <div className="font-mono text-[9px] text-lime-green uppercase border border-lime-green/30 px-2 py-0.5 mt-1 bg-lime-green/10">ACTIVE_FILE</div>
                        </div>
                      </div>
                      <p className="font-sans text-sm text-white/70 max-w-2xl">
                        CNN-based crowd density estimation trained on 10,000+ annotated images. Spatiotemporal LSTM forecasting predicts crowd surges 10-15 min ahead. Real-time heatmap dashboard via WebSocket at 24 FPS on edge hardware.
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 p-4 z-20 relative">
                      <div className="w-full lg:w-2/3 h-64 border border-lime-green/20 bg-black relative overflow-hidden group-hover:border-lime-green/50 transition-colors duration-500">
                        <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-70 transition-opacity duration-500" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                          <defs>
                            <radialGradient id="hm1" cx="30%" cy="40%"><stop offset="0%" stopColor="#D4FF3F" stopOpacity="0.8"/><stop offset="100%" stopColor="#D4FF3F" stopOpacity="0"/></radialGradient>
                            <radialGradient id="hm2" cx="70%" cy="60%"><stop offset="0%" stopColor="#FF4444" stopOpacity="0.6"/><stop offset="100%" stopColor="#FF4444" stopOpacity="0"/></radialGradient>
                          </defs>
                          <rect width="400" height="400" fill="url(#hm1)"/>
                          <rect width="400" height="400" fill="url(#hm2)"/>
                          <path d="M 0 200 Q 100 150 200 250 T 400 150" fill="none" stroke="#D4FF3F" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_20s_linear_infinite]" />
                        </svg>
                        <div className="absolute top-2 left-2 text-[8px] font-mono text-lime-green">LIVE_FEED: EDGE_NODE_01</div>
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                          <span className="w-2 h-2 bg-lime-green rounded-full"></span>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        <div className="bg-lime-green text-black font-syne font-bold text-xs p-2 uppercase rotate-[-2deg] shadow-lg border border-black inline-block self-start">
                          ★ FLAGSHIP PROJECT
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-3 flex justify-between items-center mt-2">
                          <span className="font-mono text-[9px] text-white/50">ACCURACY</span>
                          <span className="font-mono text-sm text-lime-green font-bold">91%</span>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-3 flex justify-between items-center">
                          <span className="font-mono text-[9px] text-white/50">DATASET</span>
                          <span className="font-mono text-sm text-white font-bold">10K+ IMAGES</span>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-3 flex justify-between items-center">
                          <span className="font-mono text-[9px] text-white/50">MODEL</span>
                          <span className="font-mono text-xs text-white font-bold">CNN + LSTM</span>
                        </div>
                        <a href="#" className="mt-auto bg-white/5 hover:bg-lime-green hover:text-black text-white font-mono text-[10px] p-3 text-center transition-colors border border-white/10 hover:border-lime-green">
                          [ OPEN_CASE_FILE ]
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECT 02: SMART POTHOLE DETECTION */}
                <div className="col-span-1 md:col-span-6 md:col-start-7 md:row-start-2 md:-translate-y-24 relative z-20 group">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="bg-[#08080a] border border-blue-500/30 p-4 rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0px_0px_rgba(48,79,254,0.3)] relative">
                    <div className="absolute top-4 right-4 border-2 border-red-500/50 text-red-500/50 font-syne font-bold text-[10px] p-1 rotate-[15deg] uppercase">RESTRICTED</div>
                    <div className="font-mono text-[10px] text-blue-400 tracking-widest uppercase mb-2">INFRASTRUCTURE REPORT</div>
                    <h3 className="font-syne font-black text-2xl md:text-3xl text-white uppercase leading-tight mb-3">SMART POTHOLE DETECTION</h3>
                    <p className="font-sans text-xs text-white/60 mb-6 leading-relaxed">
                      MobileNetV2 classifier on accelerometer + vibration sensor streams. 93% detection accuracy across 4 severity classes. GPS-tagged geospatial heatmap with sub-200ms REST API inference.
                    </p>
                    <div className="relative w-full h-40 bg-zinc-950 border border-white/10 mb-4 overflow-hidden group-hover:border-blue-500/50 transition-colors">
                      <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#304FFE" strokeWidth="2" strokeDasharray="10 10"/>
                        <path d="M 50 100 Q 150 20 250 100 T 400 50" fill="none" stroke="#FF6B00" strokeWidth="1.5" />
                        <circle cx="150" cy="60" r="4" fill="#FF6B00" className="animate-ping"/>
                        <circle cx="250" cy="100" r="4" fill="#FF6B00" />
                      </svg>
                      <div className="absolute top-2 left-2 text-[8px] font-mono text-blue-400">GEOSPATIAL_MONITORING_ACTIVE</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="bg-orange-500 text-black font-mono text-[9px] px-2 py-1 rotate-1 inline-block font-bold">MAINTENANCE_REQ</div>
                      <div className="border border-blue-500/30 text-blue-400 font-mono text-[9px] px-2 py-1">93% ACCURACY</div>
                      <div className="border border-white/20 text-white/70 font-mono text-[9px] px-2 py-1">REAL-TIME MONITORING</div>
                    </div>
                    <a href="#" className="block w-full border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white text-center font-mono text-[10px] py-2 transition-colors">
                      ACCESS_DATA
                    </a>
                  </div>
                </div>

                {/* PROJECT 03: FACEAFFECT */}
                <div className="col-span-1 md:col-span-5 md:col-start-1 md:row-start-3 md:-translate-y-16 relative z-30 group">
                  <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="bg-[#111] border-l-4 border-l-white/40 border-y border-r border-white/10 p-6 -rotate-[1deg] hover:rotate-0 transition-transform duration-500 shadow-xl relative">
                    <div className="absolute top-0 right-10 w-4 h-8 bg-yellow-500/20"></div>
                    <div className="font-mono text-[9px] text-white/40 tracking-widest uppercase mb-1">BIOMETRIC ANALYSIS FILE</div>
                    <h3 className="font-syne font-bold text-2xl text-white uppercase mb-4">FACEAFFECT</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full border border-dashed border-white/30 flex items-center justify-center relative bg-black shrink-0">
                        <svg className="w-10 h-10 text-white/50 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M12 14a3 3 0 00-3-3h6a3 3 0 00-3 3z" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border border-white/10 scale-110"></div>
                      </div>
                      <p className="font-sans text-[11px] text-white/60 leading-tight">
                        Hybrid CNN-Transformer architecture across 7 emotion classes. ResNet-18 + multi-head self-attention.
                      </p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between font-mono text-[9px] border-b border-white/5 pb-1">
                        <span className="text-white/40">ACCURACY</span>
                        <span className="text-white font-bold">87.4%</span>
                      </div>
                      <div className="flex justify-between font-mono text-[9px] border-b border-white/5 pb-1">
                        <span className="text-white/40">INFERENCE</span>
                        <span className="text-white font-bold">30 FPS (CPU_OPT)</span>
                      </div>
                      <div className="flex justify-between font-mono text-[9px] border-b border-white/5 pb-1">
                        <span className="text-white/40">ARCHITECTURE</span>
                        <span className="text-white font-bold">CNN + TRANSFORMER</span>
                      </div>
                    </div>
                    <a href="#" className="font-mono text-[10px] text-white underline decoration-white/30 hover:decoration-white transition-colors">
                      [ READ_RESEARCH_DOCUMENT ]
                    </a>
                  </div>
                </div>

                {/* PROJECT 04: ISSUETRACK */}
                <div className="col-span-1 md:col-span-6 md:col-start-6 md:row-start-3 md:translate-y-8 relative z-40 group">
                  <div className="bg-zinc-900 border border-white/20 p-5 rotate-[0.5deg] hover:rotate-0 transition-transform duration-500 relative">
                    <div className="flex gap-1.5 mb-4 border-b border-white/10 pb-3">
                      <div className=\"w-2.5 h-2.5 rounded-full bg-red-500/50\"></div>
                      <div className=\"w-2.5 h-2.5 rounded-full bg-yellow-500/50\"></div>
                      <div className=\"w-2.5 h-2.5 rounded-full bg-green-500/50\"></div>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-mono text-[9px] text-white/40 tracking-widest uppercase">ENGINEERING WORKFLOW BOARD</div>
                        <h3 className="font-syne font-bold text-2xl text-white uppercase">ISSUETRACK</h3>
                      </div>
                      <svg className="w-6 h-6 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs text-white/60 mb-5 leading-relaxed">
                      Production-grade issue tracking platform with multi-user environments. Role-based access control for admin, developer, and viewer roles.
                    </p>
                    <div className="flex gap-2 mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="flex-1 border border-white/10 bg-black/50 p-2 h-16 flex flex-col gap-1">
                        <div className="w-1/2 h-1 bg-white/20"></div>
                        <div className="w-full h-4 bg-white/10 rounded-sm"></div>
                      </div>
                      <div className="flex-1 border border-white/10 bg-black/50 p-2 h-16 flex flex-col gap-1">
                        <div className="w-1/2 h-1 bg-white/20"></div>
                        <div className="w-full h-4 bg-lime-green/20 border border-lime-green/30 rounded-sm"></div>
                      </div>
                      <div className="flex-1 border border-white/10 bg-black/50 p-2 h-16 flex flex-col gap-1">
                        <div className="w-1/2 h-1 bg-white/20"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-white/10 text-white font-mono text-[9px] px-2 py-0.5">JWT AUTH</span>
                      <span className="bg-white/10 text-white font-mono text-[9px] px-2 py-0.5">MERN STACK</span>
                      <span className="bg-white/10 text-white font-mono text-[9px] px-2 py-0.5">15+ COMPONENTS</span>
                    </div>
                    <a href="#" className="inline-block border border-white/30 text-white hover:bg-white hover:text-black font-mono text-[10px] px-4 py-2 transition-colors">
                      VIEW_REPOSITORY
                    </a>
                  </div>
                </div>

              </div>
            </div>
`;

code = code.slice(0, startIndex) + newContent + '          ' + code.slice(endIndex);
fs.writeFileSync(p, code);
console.log('Successfully replaced projects section.');
