type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in keyof T as P extends K ? never: P]: T[P]
}

type MyReadonly2_1<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>
