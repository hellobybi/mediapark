import { useState, useEffect } from "react"; 
import axios from "axios"; 
 
  const ToDo=() =>{ 
  const [state, setState] = useState([]); 
  const [title, setTitle] = useState(""); 
  const api = "https://665429101c6af63f4676a133.mockapi.io/hello/hello"; 
 
  const getData = async () => { 
    try { 
      const response = await axios(api); 
      setState(response.data); 
    } catch (e) { 
      console.log(e.message); 
    } 
  }; 
  useEffect(() => { 
    getData(); 
  }, []); 
 
  const addData = async () => { 
    setTitle('')
    if (title.length > 0) { 
      try { 
        const response = await axios.post(api, { 
          title, 
          isComplited: false, 
        }); 
        setState([...state,response.data]); 
      } catch (e) { 
        console.log(e); 
      } 
    } 
 
    //checkData 
 
     
  }; 

  const putData = async(isChecked, todo)=>{
    try{
      const response = await axios.put(
        `https://665429101c6af63f4676a133.mockapi.io/hello/hello/${todo.id}`,
      {
        ...todo,
        isComplited: isChecked,
      });
      console.log(response.data)
    }catch(e){
      console.log(e.message)
    }
  }


  const checkData = (e,todo)=>{ 
    let isChecked = e.target.checked;
    putData(isChecked, todo);
    console.log(e, todo); 
    // console.log(checkData) 
    const newData = state.map((item)=>{ 
      if(item.id === todo.id){ 
        return {...item,isComplited:e.target.checked}; 
      }else{ 
        return item; 
      } 
    }) 
    setState(newData)
  } ;


  //delete
  const onDelete = async (id)=>{
    try{
      const response = await axios.delete(`${api}/${id}`)
      console.log(response.data)
      const data = state.filter((p)=>p.id !== response.data.id)
      setState(data)
    }catch(e){
      console.log(e.message)
    }
  }

  return ( 
    <div className="flex justify-center items-center flex-col max-w-[700px] mx-auto gap-4 border-x-gray-400 shadow-2xl rounded-xl box-border p-6 mt-5"> 
      <div className="flex justify-between items-center gap-3 max-w-[650px] w-[100%]"> 
        <input 
          type="text" 
          placeholder="typing" 
          className="border-2 w-[80%] p-3 rounded-xl" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        /> 
        <button className="text-white bg-green-500 p-3 w-[20%] rounded-xl" onClick={addData}> 
          add 
        </button> 
      </div> 
      <div className="w-[650px]"> 
        <ul className="flex justify-between items-center flex-col gap-5 w-[100%]"> 
          {state.map((todo) => ( 
            <li key={todo.id} className="flex justify-between items-center w-[100%] shadow-lg shadow-gray-300 px-5 py-3 rounded-lg"> 
              <div className="flex gap-4">
              <input 
                type="checkbox" 
                // placeholder="typing" 
                defaultChecked={todo.isComplited}
                onChange={(e)=>checkData(e, todo)} 
              /> 
              <span 
                className={`${todo.isComplited  ? "line-through" : ''}`}> 
                {todo.title} 
              </span> 
              </div>
              <button 
              onClick={()=>onDelete(todo.id)}
              disabled={!todo.isComplited}
              className="border-2
              border-red-500 px-3 py-1
              disabled:border-gray-500 
              disabled:text-gray-500
              rounded-lg
              ">delete</button> 
            </li> 
          ))} 
        </ul> 
      </div> 
    </div> 
  ); 
}
export default ToDo