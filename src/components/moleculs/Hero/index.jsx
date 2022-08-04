import React from "react"
import { hero } from "../../../dummyData"
import "./styles.css"
import Card from "../../atoms/Card"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {hero.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
