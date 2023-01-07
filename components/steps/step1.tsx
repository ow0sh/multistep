import { useEffect, useState } from 'react';
import styles from '../../styles/Forms.module.css';

import Main from '../main';
import Nav from '../nav';
import Header from '../header';
import Footer from '../footer';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUser } from '../../redux/slices/userDataSlice';

interface StepProps {
  changeStep: (params: any) => void;
}

const Step1 = ({ changeStep }: StepProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const { rdname, rdemail, rdphone } = useAppSelector(
    (state) => state.userData
  );

  useEffect(() => {
    setName(rdname);
    setEmail(rdemail);
    setPhone(rdphone);
  }, []);

  useEffect(() => {
    if (name !== '' && email !== '' && phone !== '') {
      document.getElementById('footerbutton')?.classList.remove('opacity-50');
    } else {
      document.getElementById('footerbutton')?.classList.add('opacity-50');
    }
  }, [name, email, phone]);

  const dispatch = useAppDispatch();

  const [validation, setValidation] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  function nextStep() {
    if (name === '' && email === '' && phone === '') return;
    dispatch(addUser({ name: name, email: email, phone: phone }));
    changeStep(1);
  }

  return (
    <Main>
      <>
        <section className="mr-[100px]">
          <Nav active={1} />
        </section>
        <section className="flex flex-col w-full mr-[100px] mb-[15px]">
          <Header
            heading="Personal Info"
            content="Please provide your name, email address, and phone number."
          />
          <div className="flex flex-[1_0_auto] flex-col">
            <div className="flex justify-between w-full mt-[30px]">
              <span className={styles.span}>Name</span>
              {name.length == 0 && validation[0] && (
                <span className="text-red-500 font-default">
                  This field is requiered
                </span>
              )}
            </div>
            <input
              className={name.length == 1 ? styles.error : styles.validated}
              onChange={(e) => {
                setName(e.target.value);
                validation.splice(0, 1, true);
                setValidation(validation);
              }}
              value={name}
              placeholder={'Stephen King'}
            />

            <div className="flex justify-between w-full mt-[30px]">
              <span className={styles.span}>Email address</span>
              {email.length == 0 && validation[1] && (
                <span className="text-red-500 font-default">
                  This field is requiered
                </span>
              )}
            </div>
            <input
              className={email.length == 1 ? styles.error : styles.validated}
              onChange={(e) => {
                setEmail(e.target.value);
                validation.splice(1, 1, true);
                setValidation(validation);
              }}
              value={email}
              placeholder={'stephenking@lorem.com'}
            />

            <div className="flex justify-between w-full mt-[30px]">
              <span className={styles.span}>Phone number</span>
              {phone.length == 0 && validation[2] && (
                <span className="text-red-500 font-default">
                  This field is requiered
                </span>
              )}
            </div>
            <input
              className={phone.length == 1 ? styles.error : styles.validated}
              onChange={(e) => {
                if (e.target.value.length > 15 && e.target.value.length < 8)
                  return;
                setPhone(e.target.value);
                validation.splice(2, 1, true);
                setValidation(validation);
              }}
              type="number"
              value={phone}
              placeholder={'1234567890'}
            />
          </div>
          <Footer submit={nextStep} isHidden={true} />
        </section>
      </>
    </Main>
  );
};

export default Step1;
