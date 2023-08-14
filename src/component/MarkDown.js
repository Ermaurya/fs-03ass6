import {useState} from 'react';
import ReactMarkdown from 'react-markdown';

 const MarkDown = () => {
    const[markdown,setMarkDown]=useState("");
  return (
      <>
      <div className='container'>
        <div className='text'>
            <textarea className='textarea' onChange={(e)=>setMarkDown(e.target.value)} value={markdown}>
              
            </textarea>
        </div>
        <div className='output'>
               <ReactMarkdown>{markdown}</ReactMarkdown> 
        </div>

      </div>
    </>
  )
}
export default MarkDown;