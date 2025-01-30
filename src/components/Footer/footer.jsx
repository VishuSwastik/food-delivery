import React from 'react'
import styles from './footer.module.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
        <div className={styles.footer_content}>
            <div className={styles.footer_content_left}>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque illum tempore nostrum, ea earum sit. Recusandae in a sequi, accusantium ad officia doloribus quibusdam ipsum deserunt nobis eligendi quas deleniti.</p>
                <div className={styles.footer_social_icons}>
                    <img src={assets.face} alt="" />
                    <img src={assets.instra} alt="" />
                    <img src={assets.git} alt="" />
                </div>
            </div>
            <div className={styles.footer_content_center}>
            <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privicy Policy</li>
                </ul>
            </div>
            <div className={styles.footer_content_right}>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-108-104-2344</li>
                    <li>contact@foodcort.com</li>
                </ul>
            </div>
         
        </div>
        <div className={styles.copyright}>
            <hr />
            <p className={styles.footer_copy}>@Copyright - All Reseverd</p>
            </div>
    </div>
  )
}

export default Footer
