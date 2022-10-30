export type UseCase<Dependencies = unknown, Return = void> = (
  dependencies: Dependencies
) => { execute: () => Return };
