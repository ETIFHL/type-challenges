type Flatten<T extends any[]> = T extends [infer F, ...infer Rest] ? F extends any [] ? Flatten<[...F, ...Rest]> : [F, ...Flatten<Rest>] : T
