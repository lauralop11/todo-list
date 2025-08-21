import Search from './component/Search.tsx'
import Show from './component/Show.tsx'

export default function App (){
  return (
    <div className="App">
      <div>
        <h1>To Do List</h1>
        <Search table='list'/>
        <Show table='list'/>
      </div>
      <div>
        <h1>Books</h1>
        <Search table='books'/>
        <Show table='books'/>
      </div>
     
    </div>
  )
}