type EmptySpaceChar = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${EmptySpaceChar}${infer R}` | `${infer R}${EmptySpaceChar}` ? Trim<R> : S
