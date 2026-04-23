import React, { useState, useEffect, useCallback } from 'react';
import { TV } from './components/TV';
import { PosterFrame } from './components/PosterFrame';
import { Speaker } from './components/Speaker';
import { Bookshelf } from './components/Bookshelf';
import { ConsoleUnit } from './components/ConsoleUnit';
import { ContainerStatus, ContainerStats } from './types';
import { generateLogs } from './services/geminiService';

const App: React.FC = () => {
  const [serverConnected, setServerConnected] = useState(true);
  const [forgeStatus, setForgeStatus] = useState<ContainerStatus>('RUNNING');
  const [browserStatus, setBrowserStatus] = useState<ContainerStatus>('STOPPED');
  
  const [logs, setLogs] = useState<string[]>([
    "[System] Connection established...",
    "[System] Monitoring systems active.",
    "[Auth] User authorized."
  ]);

  const [stats, setStats] = useState<ContainerStats>({
    cpu: 67,
    gpu: 42,
    ram: 88
  });

  const [loadingLogs, setLoadingLogs] = useState(false);

  // Random stats fluctuation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        cpu: Math.min(99, Math.max(10, prev.cpu + Math.floor(Math.random() * 10) - 5)),
        gpu: Math.min(99, Math.max(0, prev.gpu + Math.floor(Math.random() * 10) - 5)),
        ram: Math.min(99, Math.max(20, prev.ram + Math.floor(Math.random() * 5) - 2)),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFetchLogs = useCallback(async (serviceName: string) => {
    if (loadingLogs) return;
    setLoadingLogs(true);
    setLogs(prev => [...prev, `[Command] Fetching logs for ${serviceName}...`]);
    
    const newLogs = await generateLogs(serviceName);
    setLogs(prev => [...prev, ...newLogs]);
    setLoadingLogs(false);
  }, [loadingLogs]);

  const clearLogs = () => {
    setLogs(["[System] Console cleared."]);
  };

  return (
    <div className="w-[1920px] h-[920px] bg-wall relative overflow-hidden flex flex-col px-24 pt-16 pb-[10px] justify-between select-none shadow-2xl">
      {/* Top Row */}
      <div className="flex items-center justify-between w-full h-[400px]">
        {/* Left Poster */}
        <PosterFrame 
          title="SD Forge" 
          type="forge"
          status={forgeStatus} 
          isActive={forgeStatus === 'RUNNING'}
          onToggle={() => setForgeStatus(prev => prev === 'RUNNING' ? 'STOPPED' : 'RUNNING')}
        />

        {/* TV */}
        <TV serverConnected={serverConnected} logs={logs} />

        {/* Right Poster */}
        <PosterFrame 
          title="File Browser" 
          type="browser"
          status={browserStatus} 
          isActive={browserStatus === 'RUNNING'}
          onToggle={() => setBrowserStatus(prev => prev === 'RUNNING' ? 'STOPPED' : 'RUNNING')}
        />
      </div>

      {/* Bottom Row */}
      <div className="flex items-end justify-between w-full pb-4">
        {/* Left Stack */}
        <div className="flex flex-col items-center gap-4 w-[280px]">
          <Speaker 
            label="B&W" 
            onClick={() => handleFetchLogs("SD Forge")} 
            loading={loadingLogs}
          />
          <Bookshelf side="left" onClear={clearLogs} />
        </div>

        {/* Console Unit */}
        <div className="flex justify-center w-[840px]">
          <ConsoleUnit stats={stats} />
        </div>

        {/* Right Stack */}
        <div className="flex flex-col items-center gap-4 w-[280px]">
          <Speaker 
            label="B&W" 
            onClick={() => handleFetchLogs("File Browser")} 
            loading={loadingLogs}
          />
          <Bookshelf side="right" onClear={clearLogs} />
        </div>
      </div>
    </div>
  );
};

export default App;
