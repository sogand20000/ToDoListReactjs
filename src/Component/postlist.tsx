import React, { useEffect } from 'react'
import axios from 'axios'

export default function PostList() {
  useEffect(() => {
    const main = async () => {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      console.log(resp)
    }
    main()
  }, [])

  return <div>Post</div>
}
