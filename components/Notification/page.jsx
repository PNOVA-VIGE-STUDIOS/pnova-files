import styles from './styles.module.css'

export const Notification = ({ status, msj }) => {
  return (
    <div className={`${styles.notification} ${styles[status]}`}>
      <p>{msj}</p>
    </div>
  )
}
export default Notification
