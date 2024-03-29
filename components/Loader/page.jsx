import styles from './styles.module.css'

export const Loader = ({ size = 25 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={styles.spinner}
    />
  )
}
