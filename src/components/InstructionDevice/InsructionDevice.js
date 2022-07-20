import React from "react";
import Slider from "react-slick";
import styles from '../InstructionDevice/InstructionDevice.module.scss';

const InstructionDevice = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div className={styles.instructionDeviceWrapper}>
        <h2 className={styles.title}> Instrukcja Podłaczenia Urządzenia</h2>
        <Slider {...settings}>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>
          
          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>
          
          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.imgStep} src={'https://images.pexels.com/photos/279991/pexels-photo-279991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
                <h3 className={styles.instructionTitle}>Sprawdz czt tryb debugowania USB jest włączony</h3>
            </div>
          </div>

        </Slider>
      </div>
    );
  }

export default InstructionDevice;


