{
  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }

  // move('asdf'); // error
  move('left');

  // 로그인 함수

  type SuccessState = {
    response: {
      body: string | undefined;
    };
  };

  type FailureState = {
    response: {
      error: string | undefined;
    };
  };

  type LoginState = SuccessState | FailureState;

  function login(): LoginState {
    return {
      response: {
        body: 'login success',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (!('error' in state.response)) {
      console.log('🎉');
    } else {
      console.log('😭');
    }
  }

  printLoginState(login());
}
