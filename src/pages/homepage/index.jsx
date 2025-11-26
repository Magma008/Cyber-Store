import React from 'react'
import Banner from '../../components/banner'
import Brands from '../../components/brands'
import Categories from '../../components/categories'
import Cards from '../../components/cards'
import SpecialCards from '../../components/special-cards'
import Discounts from '../../components/discounts'
import Offers from '../../components/offers'

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <Categories/>
      <Cards/>
      <SpecialCards/>
      <Discounts/>
      <Offers/>
    </div>
  )
}

export default HomePage
