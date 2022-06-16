type LengthOfString<S extends string, A extends string[] = []> = S extends `${infer F}${infer Rest}` ? LengthOfString<Rest, [...A, F]> : A['length']
