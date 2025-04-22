"use client"

import React, { useState } from 'react'


type FilterOptions = {
  search: string;
  categories: string;
  projectType: string;
};

const HeroFilter = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: '',
    categories: '',
    projectType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterOptions(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with:', filterOptions);
  };


  return (
    <div className='bg-white text-gray-950 p-4 rounded-xl'>
      <form className='' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 items-end md:grid-cols-5 pb-4 gap-2 md:gap-4'>
          <div className='col-span-2 flex flex-col'>
            <label htmlFor='search' className='text-sm text-gray-500 px-1 py-1 md:py-2'>Search</label>
            <input
              onChange={handleChange}
              id="search"
              name="search"
              type="text"
              placeholder='Enter by keyword...'
              className='border border-gray-200 px-3 py-1 md:py-2 rounded-sm active:bg-white focus:outline-none'
              value={filterOptions.search}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='categories' className='text-sm text-gray-500 px-1 py-1 md:py-2'>Categories</label>
            <div className='border border-gray-200 px-3 py-1 md:py-2 rounded-sm'>
            <select
              onChange={handleChange}
              id='categories'
              name='categories'
              className='w-full active:bg-white focus:outline-none'
              value={filterOptions.categories}
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='projectType' className='text-sm text-gray-500 px-1 py-1 md:py-2'>Project Type</label>
            <div className='border border-gray-200 px-3 py-1 md:py-2 rounded-sm'>
            <select
              onChange={handleChange}
              id='projectType'
              name='projectType'
              className='w-full active:bg-white focus:outline-none'
              value={filterOptions.projectType}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            </div>
          </div>
          <div className='justify-end box-border pt-2'>
            <button type="submit" className='bg-primary2 border border-primary2 text-white text-center py-1 md:py-2 rounded-sm w-full cursor-pointer'>Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HeroFilter