import { AboutMe } from "../AboutMe/AboutMe";
import { Header } from "../Header/Header";
import styles from "./PortfolioController.module.css"





export function PortfolioController(){


    return(<div className={styles.portfolioWrapper}>
        <div></div>
        <div className={styles.mainContainer}>

        <Header colorMode={'dark'}/>
        <AboutMe colorMode={'dark'}/>
        </div>
        <div></div>
        </div>
        )
}