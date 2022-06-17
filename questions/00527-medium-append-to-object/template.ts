type AppendToObject<T extends {}, U extends string, V> = {
  [P in (keyof T) | U]: P extends U ? V : T[Exclude<P, U>]
}
