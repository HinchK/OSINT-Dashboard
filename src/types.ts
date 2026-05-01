export enum PathwayStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface IntelPoint {
  id: string;
  category: string;
  label: string;
  value: string;
  confidence: number;
  source?: string;
  timestamp: string;
}

export interface Pathway {
  id: string;
  name: string;
  description: string;
  status: PathwayStatus;
  findingsCount: number;
}

export interface InvestigationState {
  targetName: string;
  intelPoints: IntelPoint[];
  pathways: Pathway[];
  completionPercent: number;
  judgmentReasoning: string;
  isComplete: boolean;
  suggestedQuestions: string[];
}

export interface ChatMessage {
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
}
