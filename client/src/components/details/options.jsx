import React, { Component } from 'react';
import styles from '../../css/options-style.css';

export default function Options(props) {
  return (
    <div className={styles.OptinoSection}>
      <h5 className={styles.OptionTitle}>
        AVAILABLE COLORS
      </h5>
      <div className={styles.OptionColorList}>
        {props.product.colors}
      </div>
      <div className={styles.OptionColorSection}>
        <div className={styles.OptionsColorIcons}>
          {
            props.options.map((option, i) => (
              <div className={styles.OptionsColorIconItem} key={i}>
                <a className={styles.OptionsColorIconBackground} href="">
                  <img className={styles.OptionsColorsIconsPic} src={option} alt=""/>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
