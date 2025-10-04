import React from 'react'
import { useQuery } from '@tanstack/react-query';
import fetchTasks from '../Api';
function HomePage() {

const{data, loading, error} = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    staleTime: 60 * 1000 * 2
})

console.log(data)
  return (
    <div>
        <h1>My Tasks</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Title: Validation failed</p>}
        {data && data.length > 0 && (
            data.map((task) => (
                <div>
                    <h2>{task.title}</h2>
                    <img src={task.image_url} alt= {task.source_name} />
                    <p>{task.description}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default HomePage;