import Card from '@/components/common/Card'
import React from 'react'

function Home() {
  return (
      <>
          <h1 className='text-2xl font-semibold mt-6'>Home page</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="villa" content="This is a description for the villa." />
              <Card title="apartment" content="This is a description for the apartment." />
              <Card title="studio" content="This is a description for the studio." />
          </div>
      </>
  )
}

export default Home