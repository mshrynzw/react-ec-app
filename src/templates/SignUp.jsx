import React, {useCallback, useState} from 'react'
import TextInput from '../components/UIkit/TextInput'

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    }, [setUsername])
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail])
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword])
    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    }, [setConfirmPassword])

    return (
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">アカウント登録</h2>
            <div className="module-spacer--medium"/>
            <TextInput
                fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
                rows={1} value={username} tyep={"text"} onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} tyep={"email"} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label={"パスワード"} multiline={false} required={true}
                rows={1} value={password} tyep={"password"} onChange={inputPassword}
            />
            <TextInput
                fullWidth={true} label={"パスワード（確認）"} multiline={false} required={true}
                rows={1} value={confirmPassword} tyep={"password"} onChange={inputConfirmPassword}
            />
        </div>
    )
}

export default SignUp