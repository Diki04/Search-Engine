"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

const fetchPost = async(url) =>{
  const response = await fetch(url)

  if(!response.ok){
    throw new Error("Failed to fetch data");
  }
    return response.json()
}


const Page = () => {
  
  const search = useSearchParams();
  const searchQuery = search ? search.get('q') : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const {data ,isLoading} = useSWR(`/api/data?q=${encodedSearchQuery}`,fetchPost)
console.log(encodedSearchQuery)
  

  return (
    <div>
      Search page
    </div>
  )
}

export default Page
