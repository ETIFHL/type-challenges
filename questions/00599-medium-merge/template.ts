type Merge<F extends {}, S extends {}> = {
  [key in keyof F | keyof S]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : never
}
