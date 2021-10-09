import emailjs from 'emailjs-com';
import PrimaryButton from '../Components/PrimaryButton';

function Mailer() {
  return (
    <div>
      <form onSubmit={sendEmail} >
        <div className="ContactForm">
          <div className="left-form">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="이름을 입력해주세요."/>
            <label htmlFor="email">Your E-mail</label>
            <input type="email" id="email" placeholder="이메일 주소를 입력해주세요." />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="제목을 입력해주세요" />
          </div>
          <div className="right-form">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="내용을 입력해주세요." />
          </div>
        </div>
        <div className="btn">
          <PrimaryButton title={'Send Email'} />
        </div>
      </form>
    </div>
  );
}

export default Mailer;
