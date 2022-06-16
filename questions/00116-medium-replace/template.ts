type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer F}${From}${infer Rest}` ? `${F}${To}${Rest}` : S
