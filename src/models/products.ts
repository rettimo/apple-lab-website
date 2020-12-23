export interface BaseInfo {
  readonly id: number
  readonly name: string
  readonly slug: string
  readonly img?: string
}

export interface IPhone extends BaseInfo {
  readonly type: 'iphone'
}

export interface IPad extends BaseInfo {
  readonly type: 'ipad'
  readonly model: string | [string]
  readonly ruler: string
}

export interface MacBook extends BaseInfo {
  readonly type: 'macbook'
  readonly model: string | [string]
  readonly ruler: string
  readonly year: number | string
  readonly diagonal: number
}

export interface MacPro extends BaseInfo {
  readonly type: 'mac-pro'
  readonly model: string | [string]
  readonly year: number | string
}

export interface MacMini extends BaseInfo {
  readonly type: 'mac-mini'
  readonly model: string | [string]
  readonly year: number | string
}

export interface IMac extends BaseInfo {
  readonly type: 'imac'
  readonly model: string | [string]
}

export interface Watch extends BaseInfo {
  readonly type: 'watch'
  readonly model: string | [string]
  readonly diagonal: number
}

export interface AppleTV extends BaseInfo {
  readonly type: 'apple-tv'
  readonly model: string | [string]
}

export interface AirPods extends BaseInfo {
  readonly type: 'air-pods'
  readonly model: string | [string]
}

export interface HomePod extends BaseInfo {
  readonly type: 'home-pod'
  readonly model: string | [string]
}

export interface IPod extends BaseInfo {
  readonly type: 'ipod'
  readonly model: string | [string]
}

export type Product =
  | IPhone
  | IPad
  | MacBook
  | MacPro
  | MacMini
  | IMac
  | Watch
  | AppleTV
  | AirPods
  | HomePod
  | IPod
