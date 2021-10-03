export interface State {
  message: string;
}

export interface Command {
  fn: (state: State) => Promise<State>;
}
