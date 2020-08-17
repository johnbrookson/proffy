import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/InputFloatLabel';
import Checkbox from './components/Checkbox';

import { FormData, useAuth } from '../../contexts/auth';

import logoImg from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import { LoginPage, LogoContent, LoginContent, Footer } from './styles';

export default function Login() {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    await signIn(data);
  };

  return (
    <LoginPage>
      <LogoContent>
        <div className="logo">
          <img src={logoImg} alt="Proffy" />
          <span>Sua plataforma de estudos online</span>
        </div>
      </LogoContent>

      <LoginContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>

          <div className="inputs">
            <Input label="E-mail" name="email" type="email" />
            <Input label="Senha" name="password" type="password" />
          </div>

          <div className="login-options">
            <Checkbox
              name="checkbox"
              options={[{ id: 'yes', value: 'yes', label: 'Lembrar-me' }]}
            />
            <Link to="/reset-password">Esqueci minha senha</Link>
          </div>

          <button className="submit-button" type="submit">
            Entrar
          </button>
        </Form>

        <Footer>
          <span>
            Não tem conta? <Link to="/signup">Cadastre-se</Link>
          </span>

          <span>
            É de graça <img src={heartIcon} alt="Coração" />
          </span>
        </Footer>
      </LoginContent>
    </LoginPage>
  );
}
