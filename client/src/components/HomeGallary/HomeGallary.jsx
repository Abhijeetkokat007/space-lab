import React from 'react'

const HomeGallary = () => {
  return (
    <>
    <div className='bg-black pb-[20px]'>
    <div className="flex items-center">
            <div className="w-[15%] mr-4 border-b-4 border-blue-700"></div>
            <h1 className="text-2xl lg:text-6xl font-bold tracking-tighter text-white">
              Our Gallery
            </h1>
    </div>
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://cdn.mos.cms.futurecdn.net/9wmT59kcwb5rdfXxM6sAgH.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.istockphoto.com/id/1207583250/photo/private-spacecraft-module-launch-above-the-clouds.jpg?s=612x612&w=0&k=20&c=P9YwgKldlos-u_DX6q2R0KeDbwW2AdiZkgP_Zpo5gK0=" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://www.nasa.gov/wp-content/plugins/nasa-blocks/assets/images/topic-cards/topic-card-sample-2.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://static01.nyt.com/images/2024/08/17/multimedia/17starliner-01-lhcm/17starliner-01-lhcm-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://cdn.mos.cms.futurecdn.net/9wmT59kcwb5rdfXxM6sAgH.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.news18.com/ibnkhabar/uploads/2022/09/NASA-space-relationship-16642726673x2.jpeg" />
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default HomeGallary