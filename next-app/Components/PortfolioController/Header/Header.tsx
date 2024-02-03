import styles from './Header.module.css'
import { poiret, yellowtail } from '@/app/fonts';

interface Props{
    colorMode:'dark'|'light';
}

export function Header({colorMode='dark'}:Props){


    return(
        <div className={ `${styles.container} ${colorMode === 'light' ? styles.mainBlockColor:styles.mainShadow}`}>


        <div className={`${styles.centerText}`}>
        <p className={` ${styles.desktopTextBlock}`}>
          <span className={`${poiret.className} ${styles.mainText} ${styles.solidFont} ${colorMode ? styles.dark : styles.light}`}>Hello, I'm </span>
          <span className={`${yellowtail.className} ${styles.mainText} ${styles.mainTitle} ${colorMode ? styles.dark : styles.light}`}>
              Cian Markwick   
          </span>
        </p>
        <div >
            <div className={`${styles.centerText}`}>
                <div className={`${styles.mobileTextBlock} `}>
              <span className={`${yellowtail.className} ${styles.mainText} ${styles.mainTitle} ${colorMode ? styles.dark : styles.light}`}>
              Cian Markwick   
              </span>
                </div>
                <div >
              <span className={`${yellowtail.className} ${styles.jobTitle} ${colorMode==='dark' ? styles.dark : styles.light}`}>
              Full Stack Developer
              </span>
                </div>
            </div>
        </div>
        </div>
      </div>)
}