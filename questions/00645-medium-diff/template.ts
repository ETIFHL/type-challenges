type Diff<O extends {}, O1 extends {}> = {
  [key in (keyof O | keyof O1) as key extends (keyof O & keyof O1) ? never : key]: key extends keyof O1 ? O1[key] : key extends keyof O ? O[key] : never
}
