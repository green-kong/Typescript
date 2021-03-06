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
        console.log('๐', state.response.body);
        break;
      case 'loading':
        console.log('๐', 'on loading');
        break;
      case 'failure':
        console.log('๐ญ', state.response.error);
    }
  };

  pringLogin({ result: 'success', response: { body: '๋ก๊ทธ์ธ ์ฑ๊ณต' } });
  pringLogin({ result: 'failure', response: { error: '๋ก๊ทธ์ธ ์คํจ' } });
  pringLogin({ result: 'loading' });
}
