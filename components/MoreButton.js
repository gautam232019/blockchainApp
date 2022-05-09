import React from 'react'
import RightArrow from '../assets/svg/rightArrow'
const MoreButton = () => {

    const styles = {
        button: `text-[#6188ff] flex items-center cursor-pointer
        whitespace-nowrap justify-between`,
    }
  return (
    <div className={styles.button}>More <RightArrow/></div>
  )
}

export default MoreButton