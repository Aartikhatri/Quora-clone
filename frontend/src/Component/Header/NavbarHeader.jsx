import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faNewspaper, faPenToSquare, faUsers, faBell, faGlobe, faClose, fas } from '@fortawesome/free-solid-svg-icons'
import AddQuestionModal from '../Container/AddQuestionModal';



const NavbarHeader = () => {
    const [openModal, setOpenModal] = useState(false)
    const [showAddquestion  , setShowAddquestion] = useState(true);
    const [ cretepost , setCreatePost  ] = useState(false)
    return (

        <div className='header-bar'>
            <div className='container'>

                <nav className="navbar navbar-expand-lg justify-content-evenly ">
                    <a className="navbar-brand" href="#"><span className='logo' >Quora</span></a>
                    <div className="navbar">
                        <a className="nav-link active"><FontAwesomeIcon icon={faHouse} size='lg' /> </a>
                        <a className="nav-link" href="#"> <FontAwesomeIcon icon={faNewspaper} size='lg' /> </a>
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faPenToSquare} size='lg' /> </a>
                        <a className="nav-link "><FontAwesomeIcon icon={faUsers} size='lg' /></a>
                        <a className="nav-link "><FontAwesomeIcon icon={faBell} size='lg' /></a>
                    </div>

                    <form className="d-flex " role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <button type="button" className="btn btn-sm rounded-pill border ms-4 px-3 mt-1 try-quora " style={{ color: "grey" }}>Try Quora+</button>
                    <div className="navbar-nav globe">
                        <a className="nav-link "><FontAwesomeIcon icon={faGlobe} size='lg' /></a>
                    </div>
                    <div className="dropdown mt-1">
                        <button className="btn dropdown-toggle btn-sm rounded-pill" style={{ backgroundColor: 'var(--theme)', color: 'var(--white)' }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Question
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={() => setOpenModal(true)}  ><FontAwesomeIcon icon={faPenToSquare} size='sm' /> Create Post {console.log(openModal)} </button>

                            <Modal open={openModal} closeIcon={<FontAwesomeIcon icon={faClose} />}
                                onClose={() => setOpenModal(false)}
                                closeOnEsc
                                closeOnOverlayClick='false'
                                top >
                                <div className='main-modal-div p-1'>
                                    <div className='catagory d-flex mt-2 p-2'>
                                        <button onClick={()=>{setShowAddquestion(true) , setCreatePost(false)}} className='dropdown-item text-center modal-opt'>Add Question / Create Post</button >
                                       
                                    </div>
                                        <hr />
                                    <div>
                                    <AddQuestionModal setModal={setOpenModal} /> 
                                    
                                    </div>
                                </div>
                            </Modal>

                        </div>
                    </div>




                </nav >


            </div>
        </div>

    )
}


export default NavbarHeader
