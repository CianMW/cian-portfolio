import styles from './AboutMe.module.css'


interface Props{
    colorMode:string;
}
export function AboutMe({colorMode}:Props){
    return(
    <div className={` ${styles.mainContainer} ${colorMode === 'dark'? styles.dark:styles.light}`}>
        <div className={`${styles.textContainer} ${styles.combinedStyles}`}>
        <p className="align-text-center">
                I am Cian Markwick a web developer from Ireland, now based in
                Glasgow Scotland I am especially passionate about the{" "}
                <span className="boldened">
                  digitization of interactive media, mobile first development
                  and human centric design
                </span>
                . My best tools include{" "}
                <span className="boldened">
                  Javascrtipt, Express, Node, React, Typescript and MongoDB
                </span>
                .
              </p>
              <p className="d-none d-sm-block">
                What do I do?{" "}
                <span className="boldened">
                  I solve problems, puzzles and challenges
                </span>{" "}
                and I really enjoy it! In my work I'm consistently pushing to
                achieve more <span className="boldened">effective design</span>{" "}
                while always adding an artistic flair.{" "}
              </p>
        </div>

        <div className={styles.imageContainer}>
                <img
                  className={`rounded ${styles.image} ${colorMode ==='dark' && styles.glow}`}
                  src="https://i.ibb.co/hcVmTqQ/Optimized-cian-neon.jpg"
                />
              </div>
    </div>)
}