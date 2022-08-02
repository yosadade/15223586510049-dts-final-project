import React from "react"
import { discover } from "../../../dummyData"
import Label from '../../atoms/Label'
import "./styles.css"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Label title='Discover' />
          <div className='content'>
            {discover.map((val) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
