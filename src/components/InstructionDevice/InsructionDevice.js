import React from "react";
import Slider from "react-slick";
import styles from '../InstructionDevice/InstructionDevice.module.scss';
import { FaWindowClose } from 'react-icons/fa';

const InstructionDevice = ({setFunc}) => {

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
      <div className={styles.instructionDeviceWrapper}>
        <Slider className={styles.sliderStyle} {...settings}>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
              <div className={styles.btnCloseWrapper}>
                <button className={styles.btnClose}
                  onClick={() => setFunc(false)}
                  >
                  <FaWindowClose />
                </button>
              </div>
              <img className={styles.imgStep} src={'/img/step1.jpeg'}/>
              <h3 className={styles.instructionTitle}>Podłacz kabel sieciowy i wlacz serwer do gniazdka. Serwer wlaczy sie automatycznie</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
              <div className={styles.btnCloseWrapper}>
                <button className={styles.btnClose}
                  onClick={() => setFunc(false)}
                  >
                  <FaWindowClose />
                </button>
              </div>
              <img className={styles.imgStep} src={'/img/step2.jpeg'}/>
              <h3 className={styles.instructionTitle}>Sprawdz w swoim telefonie czy tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
              <div className={styles.btnCloseWrapper}>
                <button className={styles.btnClose}
                  onClick={() => setFunc(false)}
                  >
                  <FaWindowClose />
                </button>
              </div>
              <img className={styles.imgStep} src={'/img/step3.jpeg'}/>
              <h3 className={styles.instructionTitle}>Wpisz model telefonu, IMEI i nacisnij przycisk dodaj urzadzenie </h3>
            </div>
          </div>

        </Slider>
      </div>
    </div>
    );
  }

export default InstructionDevice;


