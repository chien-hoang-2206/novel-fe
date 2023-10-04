import React from 'react'
import { ImageBanner, TransparentBanner } from './Bannerstyle'
function BannerImage(props) {
  return (
    <>
        <ImageBanner  style={{backgroundImage: props.backgroundImage}} >
        <TransparentBanner/>
        </ImageBanner>
    </>
  )
}
BannerImage.defaultProps = {
    backgroundImage: "url('image/bgBanner.jpg')",
  };
export default BannerImage
