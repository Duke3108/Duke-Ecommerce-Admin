import AppAreaChart from '@/components/AppAreaChart'
import AppBarchart from '@/components/AppBarchart'
import AppPieChart from '@/components/AppPieChart'
import CardList from '@/components/CardList'
import TodoList from '@/components/ui/TodoList'
import React from 'react'

const Homepage = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppBarchart/>
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'><CardList title="Latest Transactions"/></div>
      <div className='bg-primary-foreground p-4 rounded-lg'><AppPieChart/></div>
      <div className='bg-primary-foreground p-4 rounded-lg'><TodoList/></div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppAreaChart/>
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'><CardList title="Popular Content"/></div>
    </div>
  )
}

export default Homepage