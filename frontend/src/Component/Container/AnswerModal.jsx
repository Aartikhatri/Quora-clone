import { config } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import React, { useState } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AnswerModal = (props) => {
    const [answer, setAnswer] = useState('');

    function handleQuill(value){
        
        setAnswer(value)
    }

    const handleSubmit = async () => {
        if (props.post?._id ) {
            const body = {
                answer: answer,
                questionId: props.post?._id
            }
            const config = {
                headers: { "Content-Type": "application/json " }
            }
            await axios.post('/ans', body, config).then((res) => {
                 console.log(res.data);
                alert("Answer added Successfully")
                window.location.href = "/"
            }).catch((e) => { console.log(e), alert("Error cant add your Answer") })
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div>
                <h6>{props.post?.question} </h6>
                <p>asked by { } <span>user Name { } </span> on time { new Date(props.post?.createAt).toLocaleString()} </p>
            </div>
            <div className=''>
                <ReactQuill onChange={ handleQuill}  value={answer} placeholder='Write your answer here' className='mb-4' />
            </div>
            <div className='mt-5' >

                <button type="button" className="btn btn-primary btn-sm me-1" onClick={() => props.setModal(false)} >Cancle</button>
                <button type="button" onClick={() => { handleSubmit(), props.setModal(false) }} className="btn btn-secondary btn-sm">Add Answer</button>
            </div>
        </div>
    )
}

export default AnswerModal
