/**
 * Types and Interfaces for Jayne Oliveira's Nutritionist Landpage
 */

export interface Pillar {
  id: string;
  title: string;
  description?: string;
}

export type ServiceMode = 'online' | 'presencial';

export interface SchedulingData {
  name: string;
  phone?: string;
  mode: ServiceMode;
  goal: string;
  customMessage?: string;
}

export interface MenuItem {
  label: string;
  targetId: string;
}
