
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faMessage , faPenSquare, faPen } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className='search-box mt-2'>
            <div className='search-and-userIcon-div' >
                <div className='user-icon' ><FontAwesomeIcon icon={faUser} style={{ margin: '0.25rem 0.2rem' }} /></div>
                <div class="form-outline w-100">
                    <input type="text" id="formControlSm" class="form-control form-control-sm rounded-pill" style={{backgroundColor: '#f1f2f2'}} placeholder='What do You want to Ask or Share ?' />
                </div>

            </div>
            <div className='ask-answer-post-div'  >
                <div className='send-post'><FontAwesomeIcon icon={faMessage} size='sm' /><b> Ask </b></div>
                <div className='send-post'><FontAwesomeIcon icon={faPenSquare} size='sm' /> <b>Answer</b></div>
                <div className='send-post' style={{border: 'none'}}><FontAwesomeIcon icon={faPen} size='sm' /><b> Post</b></div>
            </div>
        </div>
    )
}

export default SearchBar
