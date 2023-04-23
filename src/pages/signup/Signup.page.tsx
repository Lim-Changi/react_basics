import '../../components/signup.css'
import SignupComponent from "../../components/Signup";
import React, {useEffect, useState } from "react";


const SignupPage = () => {
    const [email, setEmail] = useState<string>('')
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
    const [isEmailTouched, setIsEmailTouched] = useState<boolean>(false);
    const [pw, setPw] = useState<string>('')
    const [pwCheck, setPwCheck] = useState<string>('')
    const [isPwMatch, setIsPwMatch] = useState<boolean>(true)
    const [isPwTouched, setIsPwTouched] = useState<boolean>(false);
    const [isPwCheckTouched, setIsPwCheckTouched] = useState<boolean>(false);
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        if(!emailValue) {
            setIsValidEmail(true)
            return
        }
        setEmail(emailValue);
    };

    const handleEmailBlur = () => {
        setIsEmailTouched(true)
    }

    const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pwValue = event.target.value;
        setPw(pwValue);
    };

    const handlePwCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pwCheckValue = event.target.value;
        setPwCheck(pwCheckValue)
    };

    const handlePwBlur = () => {
        setIsPwTouched(true)
    }

    const handlePwCheckBlur = () => {
        setIsPwCheckTouched(true)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nameValue = event.target.value;
        setName(nameValue);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const ageValue = Number(event.target.value);
        setAge(ageValue);
    };

    useEffect(() => {
        if (isEmailTouched) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValidEmail(emailRegex.test(email));
        }
    }, [email, isEmailTouched]);

    useEffect(() => {
        if (isPwTouched && isPwCheckTouched) {
            setIsPwMatch(pw === pwCheck);
        }
    }, [isPwTouched, pw, pwCheck]);

    const submitSignup = () => {
    }

    return (
        <div className= "signup-main">
            <header>
                <h2>회원가입</h2>
                <div onChange={handleEmailChange} onBlur={handleEmailBlur}>
                    <SignupComponent name="이메일" required={true} text={"이메일을"}/>
                    {isEmailTouched && !isValidEmail && <span style={{ color: 'red', fontSize: '12px'}}>유효하지 않은 이메일 형식</span>}
                </div>
                <div onChange={handlePwChange} onBlur={handlePwBlur}>
                    <SignupComponent name="비밀번호" required={true} text={"비밀번호를"}/>
                </div>
                <div onChange={handlePwCheckChange} onBlur={handlePwCheckBlur}>
                    <SignupComponent name="비밀번호 재확인" required={true} text="비밀번호를 다시" />
                    {!isPwMatch && <span style={{ color: 'red', fontSize: '12px'}}>비밀번호가 일치하지 않습니다.</span>}
                </div>
                <div onChange={handleNameChange}>
                    <SignupComponent name="이름" text={"이름을"}/>
                </div>
                <div onChange={handleAgeChange}>
                    <SignupComponent name="나이" text={"나이를"} />
                </div>
                <br/>
                <button className="signup-button" onClick={submitSignup}>가입하기</button>
            </header>
        </div>
    );
};

export default SignupPage;
