import React, { useState } from "react";
import Slider from "react-slick";
import styles from '../InstructionSerwer/InstructionSerwer.module.scss';
import { FaWindowClose } from 'react-icons/fa';
import SerwerAddForm from "../SerwerAddForm/SerwerAddFormContainer";

const InstructionSerwer = ({setShowSerwerInstruction}) => {
  const [serwerAddForm, setShowSerwerAddForm] = useState(false)
  const [noAnswer, setNoAnswer] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div className={styles.stepNumberWrapper}>
            <ul className={styles.stepNumbers}>
              {dots}
            </ul>
          </div>
        ),
        customPaging: i => (
          <div className={styles.stepContainer}>
            <ul className={styles.step}>
              {i + 1}
            </ul>
          </div>
        ),
      };

    return (
    <div className={styles.pageWrapper}>
      <div className={styles.instructionSerwerWrapper}>
        <Slider className={styles.sliderStyle} {...settings}>

          <div className={styles.stepWrapper}>
              <div className={styles.imgWrapper}>
                <div className={styles.btnCloseWrapper}>
                  <button className={styles.btnClose}
                    onClick={() => setShowSerwerInstruction(false)}
                    >
                    <FaWindowClose />
                  </button>
                </div>
                <img className={styles.imgStep} src={'/img/serwerstep2.jpeg'}/>
                <p className={styles.titleStep}> 
                Jak znasz swój IP adress serwera to wpisz go ponizej i dodaj do listy
                </p>

                <div className={styles.btnAnswerWrapper}>
                  <button 
                    className={styles.btnYes}
                    onClick={() => {
                      setShowSerwerAddForm(true)
                      setNoAnswer(false)
                    }}
                    >
                      Mam
                  </button>
                  <button 
                    className={styles.btnNo}
                    onClick={() => {
                      setShowSerwerAddForm(false)
                      setNoAnswer(true)
                    }}
                    >
                      Nie Mam
                  </button>
                </div>

                {noAnswer ? <p>przejdz dalej</p> : null}
                {serwerAddForm ? <SerwerAddForm setShowSerwerInstruction = {setShowSerwerInstruction}/> : null}

              </div>
            </div>
            
            <div className={styles.stepWrapper}>
              <div className={styles.imgWrapper}>
                <div className={styles.btnCloseWrapper}>
                  <button className={styles.btnClose}
                    onClick={() => setShowSerwerInstruction(false)}
                    >
                    <FaWindowClose />
                  </button>
                </div>
                <img className={styles.imgStep} src={'/img/serwerstep1.jpeg'}/>
                <h3 className={styles.titleStep}>
                  Sprwadz adress IP serwera w umowie partnerskiej
                </h3>
              </div>
            </div>
        </Slider>
      </div>
    </div>
    );
  }

export default InstructionSerwer;


