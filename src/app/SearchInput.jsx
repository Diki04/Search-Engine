"use client"

import React, { useState } from 'react'

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();

    
  }


  return (
    <form className='flex justify-center w-2/3' onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className='px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400 '
        placeholder='Cari kata...' />
    </form>
  )
}


export default SearchInput
