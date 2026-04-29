export interface AsyncIdleState {
  status: 'idle'
}

export interface AsyncLoadingState {
  status: 'loading'
}

export interface AsyncSuccessState<T> {
  status: 'success'
  data: T
}

export interface AsyncErrorState {
  status: 'error'
  message: string
}

export type AsyncState<T> =
  | AsyncIdleState
  | AsyncLoadingState
  | AsyncSuccessState<T>
  | AsyncErrorState
