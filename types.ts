export type ContainerStatus = 'RUNNING' | 'STOPPED' | 'BUILDING';

export interface ContainerStats {
  cpu: number;
  gpu: number;
  ram: number;
}

export interface LogEntry {
  timestamp: string;
  message: string;
}
