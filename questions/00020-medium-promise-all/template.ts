declare function PromiseAll<T extends any[] = any[]>(values: readonly [...T]): Promise<{ [K in keyof T]: T[K] extends Promise<any> ? Awaited<T[K]> : T[K] }>
