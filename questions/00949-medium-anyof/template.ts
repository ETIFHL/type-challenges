type isTrue<T> = T extends Record<any, never> | [] | 0 | '' | false ? true : false

type AnyOf<T extends readonly any[]> = isTrue<T[number]> extends true | [] ? false : true
