import React from 'react'
import AnswerModal from './AnswerModal'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faClose, faDownLong, faUser, faRecycle, faCircle, faComment, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ReactTimeAgo from 'react-time-ago'
import  ReactHTMLParser  from 'html-react-parser';

export function LastSeen({ date }) {
  return (
    <div >
      Posted : <ReactTimeAgo date={date} locale='en-US' timeStyle={'round'} />
    </div>
  )
}


const Post = ({ post }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='post-box mt-2' >
      <div className='post-header d-flex p-1' >
        <div className='user-icon me-2 p-2 ' ><FontAwesomeIcon icon={faUser} style={{ margin: '0.25rem 0.2rem' }} /></div>

        <h6 className='me-2 mt-2' >Name here  <FontAwesomeIcon icon={faCircle} style={{ height: '0.3rem', width: '0.3rem' }} />  </h6>
        <small className='me-2 mt-2' > <LastSeen date={new Date(post?.createAt).toLocaleString()} /> </small>
      </div>

      <div className='post-body d-flex justify-content-between p-2' >
        {/* question display */}
        <h4>{post?.question} </h4>


        <button className=' btn btn-light' onClick={() => setOpenModal(true)}  >Answer </button>

        {/* modal for add answer */}
        <Modal open={openModal} closeIcon={<FontAwesomeIcon icon={faClose} />}
          onClose={() => setOpenModal(false)}
          closeOnEsc
          closeOnOverlayClick='false'
          top >
          <div className='main-modal-div p-1'>
            <AnswerModal setModal={setOpenModal} post={post} />
          </div>
        </Modal>
      </div>


      <div className="post-img">
        <img src={post?.image} alt="" width={'100%'} /> image section
      </div>

      <div className="post-footer d-flex ">
        <div className='d-flex'>
          <div className='py-2 mx-2'> <FontAwesomeIcon icon={faUpLong} /> </div>
          <div className='py-2 mx-2'> <FontAwesomeIcon icon={faDownLong} /> </div>
          <div className='py-2 mx-2'> <FontAwesomeIcon icon={faRecycle} /> </div>
          <div className='py-2 mx-2'> <FontAwesomeIcon icon={faComment} /> </div>
        </div>

        <div className='d-flex'>
          <div className='me-2'> <FontAwesomeIcon icon={faShare} /></div>
          <div className='me-2' > <FontAwesomeIcon icon={faEllipsis} /> </div>
        </div>

      </div>
      <div>
        <p className='ms-2' style={{ fontSize: '0.85rem' }}> {post?.allAnswer.length} Answers </p>
      </div>
      <hr />
      {post?.allAnswer.length == 0 ? <div></div> : <div className="post-answer">
        <div className='post-header d-flex p-1' >
          <div className='user-icon me-2 p-2 ' ><FontAwesomeIcon icon={faUser} style={{ margin: '0.25rem 0.2rem' }} /></div>

          <h6 className='me-2 mt-2' >Name here  <FontAwesomeIcon icon={faCircle} style={{ height: '0.3rem', width: '0.3rem' }} />  </h6>
          <small className='me-2 mt-2' >  <LastSeen date={new Date(post?.allAnswer[0]?.createAt).toLocaleString()} />  </small>
        </div>
        <div>
           <b>Ans :-</b> 
           <span style={{ fontWeight : '400'}} >{ReactHTMLParser(post?.allAnswer[0]?.answer)} </span>
        </div>
      </div>}

    </div>

  )
}

export default Post
