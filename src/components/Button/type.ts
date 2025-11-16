// src/components/Button/type.ts
export type ButtonColor = 'green' | 'white' | 'transparent';

export interface ButtonProps {
  title: string;
  color?: ButtonColor;
}