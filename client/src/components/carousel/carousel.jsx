import React, { Component } from "react";
import ImageList from "./imageList";
import styles from "../../css/carousel/carousel.css"

export default function Details(props) {
  return (
    <div className={styles.FeaturedContainer}>
      <div className={styles.FeaturedSelector}>
        <img className={styles.FeaturedImage} src={props.featured} alt="" />
      </div>
      <ImageList product={props.product} images={props.images} />
    </div>
  )
}