export enum AppDirection {
  RTL = 'rtl',
  LTR = 'ltr',
}

export enum AppLang {
  EN = 'en',
  PT = 'pt',
}

export enum AppTheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface User {
  id: string
  username: string
  email: string
  avatar: string
}

export type UserRegisterParams = Pick<User, 'username' | 'email' | 'avatar'>

export interface Character {
  id: string
  userId: string
  avatar: string
  name: string
  factions: Faction[]
  jobs: Job[]
  level: number
  grade: number
  currentExp: number
  maximumExp: number
  enhancementPoints: number
  regenerationPoints: number
  jobPoints: number
  gold: number
}

export interface Faction {
  id: string
  name: string
  description: string
}

export interface Job {
  id: string
  tier: number | 'supreme'
  name: string
  description: string
}
