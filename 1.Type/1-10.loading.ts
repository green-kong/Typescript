{
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailureState = {
    result: 'failure';
    response: {
      error: string;
    };
  };

  type LoadingState = {
    result: 'loading';
  };

  type LoginState = SuccessState | FailureState | LoadingState;

  const pringLogin = (state: LoginState) => {
    switch (state.result) {
      case 'success':
        console.log('👏', state.response.body);
        break;
      case 'loading':
        console.log('🚀', 'on loading');
        break;
      case 'failure':
        console.log('😭', state.response.error);
    }
  };

  pringLogin({ result: 'success', response: { body: '로그인 성공' } });
  pringLogin({ result: 'failure', response: { error: '로그인 실패' } });
  pringLogin({ result: 'loading' });
}
