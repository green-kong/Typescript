{
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailureState = {
    result: 'failure';
    error: string;
  };

  type LoginState = SuccessState | FailureState;

  const login = (): LoginState => {
    return {
      result: 'success',
      response: {
        body: '로그인 성공!',
      },
    };
  };

  const checkLogin = (state: LoginState) => {
    if (state.result === 'success') {
      console.log('🎉', state.response.body);
    } else {
      console.log('😭', state.error);
    }
  };
}
