type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends (...args: infer F) => infer R ? (...args: [...F, A]) => R : Fn
