import React, { useRef } from 'react';
import emailjs  from 'emailjs-com';
import {MainLayout, InnerLayout} from '../styles/Layout';
import styled from 'styled-components';
import Title from '../Components/Title';
import ContactItem from '../Components/ContactItem';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import PrimaryButton from '../Components/PrimaryButton';
import {useForm} from 'react-hook-form';

function ContactPage() {
  const location = <LocationOnIcon />
  const phone = <CallIcon />
  const email = <MailOutlineIcon />
  const web = <LanguageIcon />

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const form = useRef();
  const sendEmail = () => {
    
        
    emailjs.sendForm('lucybutler', 'lucybutler_Template', form.current, 'user_oLbdw4M8kYupv7HDuA03I')
      .then((result) => {
          console.log(result.text);
          reset();
      }, (error) => {
          console.log(error.text);
      }); 
      
      
  }


  return (
    
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />
      <InnerLayout>
        <ContactPageStyle>
          <div className="Contact-Infomation">
            <h3>Contact <span>Information</span></h3>
            <div className="Infomation">
              <ContactItem icon={location} title={'Address'} cont={'서울시 구로구 천왕동'}/>
              <ContactItem icon={phone} title={'Cell Phone'} cont={'010-0000-0000'}/>
              <ContactItem icon={email} title={'E-Mail'} cont={'lucybutler@naver.com'}/>
              <ContactItem icon={web} title={'Web Site'} cont={'web.discode.co.kr'}/>

            </div>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div className="ContactForm">
                <div className="left-form">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="이름을 입력해주세요." {...register("name",{ required: true })} />
                  <div className="errtext">{errors.name?.type === 'required' && "이름을 입력해주세요"}</div>
                  <label htmlFor="email" >Your E-mail</label>
                  <input type="email" id="email" name="email" placeholder="이메일 주소를 입력해주세요." {...register("email",{ required: true })} />
                  <div className="errtext">{errors.email?.type === 'required' && "이메일 주소를 입력해주세요"}</div>
                  <label htmlFor="subject" >Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="제목을 입력해주세요" {...register("subject",{ required: true })} />
                  <div className="errtext">{errors.subject?.type === 'required' && "제목을 입력해주세요"}</div>
                </div>
                <div className="right-form">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="10" placeholder="내용을 입력해주세요." {...register("message",{ required: true })} />
                  <div className="errtext">{errors.message?.type === 'required' && "내용을 입력해주세요"}</div>
                </div>
              </div>
              <div className="btn">
                <PrimaryButton title={'Send Email'} type="submit" />
              </div>
            </form>
          </div>
        </ContactPageStyle>
      </InnerLayout>
    </MainLayout>
  );
}

const ContactPageStyle = styled.section`
  .Contact-Infomation {
    
    h3 {
        margin-bottom: 5rem;
        font-size: 2rem;
        color: var(--white-color);
        text-align: center;
        letter-spacing: 1px;
        @media screen and (max-widtH:620px) {
          font-size: 1.6rem;
          margin-bottom: 3rem;
        }
        span {
          font-size: 2rem;
          color: var(--icon-color);
          @media screen and (max-widtH:620px) {
          font-size: 1.6rem;
          }
        }
      }
    .Infomation {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: .2;
      margin-bottom: 5rem;
      p {
        color: var(--icon-color);
      }
      svg {
        color: var(--icon-color);
      }
      @media screen and (max-width:1480px) {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 3rem;
        li {
          margin-bottom: 1rem;
        }
      }
    }
    .ContactForm {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      
      .left-form {
        padding-right: 2rem;
        label {
          display: block;
          margin: .4rem 0;
          font-size: 1.2rem;
          font-weight: 200;
          color: var(--white-color);
          letter-spacing: 1px;
        }
        input {
          width: 100%;
          height: 50px;
          line-height: 50px;
          padding: 0 15px;
          background: transparent;
          margin-bottom: 1rem;
          outline: none;
          border: 1px solid var(--border-color);
          color: var(--white-color);
          &::placeholder {
            opacity: .2;
          }
          &:focus {
            outline: 1px solid var(--white-color);
          }
        }
      }
      .right-form {
        label {
          display: block;
          margin: .4rem 0;
          font-size: 1.2rem;
          font-weight: 200;
          color: var(--white-color);
          letter-spacing: 1px;
        }
        textarea {
          width: 100%;
          height: 15.4rem;
          padding: .8rem 1rem;
          background: transparent;
          outline: none;
          border: 1px solid var(--border-color);
          color: var(--white-color);
          &::placeholder {
            opacity: .2;
          }
          &:focus {
            outline: 1px solid var(--white-color);
          }
        }
      }
      @media screen and (max-width:940px) {
        grid-template-columns: repeat(1, 1fr);
        .left-form {
          padding-right: 0;
        }
      }
      .errtext {
        font-size: .8rem;
        text-align: center;
        color: #ff4141;
      }
      
    }
    .btn {
      margin-top: 2rem;
      text-align: center;
    }
    
  }
`;

export default ContactPage;
