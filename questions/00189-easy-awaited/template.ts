// type MyAwaited<T> = T extends never ? T :
//   T extends Object & { then(onfulfilled: infer F): any } ?
//     F extends ((value: infer R, ...args: any) => any) ?
//       MyAwaited<R> : never
//     : T

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ?
  R extends Promise<unknown> ? MyAwaited<R> : R
  : never
