import Link from "next/link";
import styles from './styles.module.css'

export function Footer({description, link, textLink}) {
    return(
        <div className={styles.footerContainer}>
            <span className={styles.footerSpan}>
                {description}{''}
                <Link className={styles.footerLink} href={link}>
                    {textLink}
                </Link>
            </span>
        </div>
    )
}