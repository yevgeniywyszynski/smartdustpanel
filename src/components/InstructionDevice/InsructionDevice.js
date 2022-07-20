import React from "react";
import Slider from "react-slick";
import styles from '../InstructionDevice/InstructionDevice.module.scss';

const InstructionDevice = ({setFunc}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
    <div className={styles.pageWrapper}>
      <div className={styles.instructionDeviceWrapper}>
        <Slider className={styles.sliderStyle} {...settings}>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/3809702/pexels-photo-3809702.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Podłacz kabel sieciowy i wlacz serwer do gniazdka. Serwer wlaczy sie automatycznie</h3>
                <div className={styles.btnCloseWrapper}>
                  <button className={styles.btnClose}
                    onClick={() => setFunc(false)}
                    >
                    Close
                  </button>
                </div>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz w swoim telefonie czy tryb debugowania USB jest włączony</h3>
                <div className={styles.btnCloseWrapper}>
                  <button className={styles.btnClose}
                    onClick={() => setFunc(false)}
                    >
                    Close
                  </button>
                </div>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/6964507/pexels-photo-6964507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Wpisz model telefonu, IMEI i nacisnij przycisk dodaj urzadzenie </h3>
                <div className={styles.btnCloseWrapper}>
                  <button className={styles.btnClose}
                    onClick={() => setFunc(false)}
                    >
                    Close
                  </button>
                </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
    );
  }

export default InstructionDevice;


