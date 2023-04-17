import React from 'react';
import './components/Signup'
import SignupComponent from "./components/Signup";

function App() {
  return (
    <div className= "signup-main">
      <header>
        <h2>회원가입</h2>
        <body>
          <SignupComponent name="이메일" required={true} text={"이메일을"}/>
          <SignupComponent name="비밀번호" required={true} text={"비밀번호를"}/>
          <SignupComponent name="비밀번호 재확인" required={true} text="비밀번호를 다시" />
          <SignupComponent name="이름" text={"이름을"}/>
          <SignupComponent name="나이" text={"나이를"} />
        </body>
        <br/>
        <button className="signup-button">가입하기</button>
      </header>

    </div>
  );
}

export default App;
