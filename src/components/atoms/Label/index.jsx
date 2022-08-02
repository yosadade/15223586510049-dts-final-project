import React from "react"
import "./styles.css"

const Label = ({ title }) => {
  return (
    <>
      <div className='label'>
        <h6>{title}</h6>
      </div>
    </>
  )
}

export default Label
