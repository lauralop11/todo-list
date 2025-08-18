import Search from './component/Search.tsx'
import {Show }from './component/Show.tsx'

export default function App (){
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Search />
      <Show />
    </div>
  )
}