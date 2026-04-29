export type AsyncIdleState = {
  status: 'idle'
}

export type AsyncLoadingState = {
  status: 'loading'
}

export type AsyncSuccessState<T> = {
  status: 'success'
  data: T
}

export type AsyncErrorState = {
  status: 'error'
  message: string
}

export type AsyncState<T> =
  | AsyncIdleState
  | AsyncLoadingState
  | AsyncSuccessState<T>
  | AsyncErrorState
