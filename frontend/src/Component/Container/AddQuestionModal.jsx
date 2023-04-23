import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const AddQuestionModal = (props) => {
    const [question , setQuestion] = useState("");
    const [imageFile , setImageFile] = useState(null)

    const handleSubmit = async ()=>{
       
        if( question !== ""){
            const body = {
                question : question,
                image : imageFile
            }
            console.log(imageFile , '17');
            const formdata = new FormData();
            formdata.append('question' , question)
            formdata.append('image' , imageFile)
            
            const config = {
                headers : { "Content-Type" : "multiparse/form-data"}
            }
              await axios.post('/que' , formdata , config ).then((res)=>{
                console.log(res.data);
                alert("Question added Successfully")
                window.location.href = '/'
              }).catch((e)=> {console.log(e) , alert("Error cant add your question") })
        }
    }

    // function convertToSring(e){
    //     var reader= new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = ()=>{
           
    //         setImageFile(reader.result)
    //     }
    // } 

    return (
        <div className='addquestion-div' >
            <div className='d-flex'>
                <div className='user-icon' ><FontAwesomeIcon icon={faUser} style={{ margin: '0.25rem 0.2rem' }} /></div>

                <div className="dropdown mt-1 mx-2">
                    <button className="btn dropdown-toggle btn-sm rounded-pill" style={{ backgroundColor: 'var(--grey)', color: 'grey' }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Public
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" style={{ fontSize: '0.65rem', minWidth: 'fit-content' }} >1) Public Others will see your identity alongside this question on your profile and in their feeds.</button>
                        <button className="dropdown-item" style={{ fontSize: '0.65rem', minWidth: 'fit-content' }} >2) Limited our identity will be shown but this question will not appear in your followers' feeds or your profile.  </button>

                    </div>

                </div>

            </div>

       <div className='mt-2'>
                <div className="form-group border-bottom">
                    <input type="text" className="form-control border-0 " name='question' id="exampleInputPassword1" placeholder='Start your question with "What", "How", "Why", etc.'
                    onChange={(e)=>setQuestion(e.target.value) } />
                </div>
            </div>
 
            <div className='addQuestion-footer  justify-content-between d-flex border-top p-4' >
             
                
                <div className="">
                    <input type="file"  className="form-control form-control-sm" id="formFileSm" onChange={(e)=> { setImageFile(e.target.files[0])}} />
                </div>
                <div>
                    <button type="button" className="btn btn-primary btn-sm me-1" onClick={() =>{ props.setModal(false) } } >Cancle</button>
                    <button type="submit" onClick={ ()=> { handleSubmit() , props.setModal(false) }} className="btn btn-secondary btn-sm">Add Question</button>
                </div>
            </div>

       

        </div>
   
    )
}

export default AddQuestionModal
