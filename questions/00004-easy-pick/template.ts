type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P]
}
