import React, { useEffect, useState,useMemo } from 'react'
import Footer from './Footer.jsx'
let val =false
function Contact() {
  const [ischecked, setischecked] = useState(false)
  let checked = useMemo(()=>{
    return ischecked;
  },[ischecked])
const [checkStyle , setcheckStyle] =  useState({
  checkImg: {display:'none', zIndex:-5},
  inputCheck :{zIndex:3}
 })
  const [input, setinput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    checked: false,
  })
  const [error, seterror] = useState({
    firstName: { text: '', outline: false },
    lastName: { text: '', outline: false },
    email: { text: '', outline: false },
    message: { text: '', outline: false },
    checked: { text: '' },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.firstName === '' || undefined)
      seterror((prev) => ({
        ...prev,
        firstName: { text: 'Enter your first name', outline: true },
      }))
    if (input.lastName === '' || undefined)
      seterror((prev) => ({
        ...prev,
        lastName: { text: 'Enter your last name', outline: true },
      }))
    if (input.email === '' || undefined)
      seterror((prev) => ({
        ...prev,
        email: { text: 'Please Enter your email ', outline: true },
      }))
    if (input.message === '' || undefined)
      seterror((prev) => ({
        ...prev,
        message: { text: 'Please Enter a message', outline: true },
      }))
    if (input.checked === false || undefined)
      seterror((prev) => ({
        ...prev,
        checked: { text: 'Please read and agree before submitting' },
      }))
    setTimeout(() => {
      seterror({
        firstName: { text: '', outline: false },
        lastName: { text: '', outline: false },
        email: { text: '', outline: false },
        message: { text: '', outline: false },
        checked: { text: '' },
      })
    }, 15000)
  }
  const handleInput = (e) => {
    if (e.target.id === 'first_name') {
      setinput((prev) => ({ ...prev, firstName: e.target.value }))
    }
    if (e.target.id === 'last_name')
      setinput((prev) => ({ ...prev, lastName: e.target.value }))
    if (e.target.id === 'message')
      setinput((prev) => ({ ...prev, message: e.target.value }))
    if (e.target.id === 'terms')
      setinput((prev) => ({ ...prev, checked: true }))
    if (e.target.id === 'email')
      setinput((prev) => ({ ...prev, email: e.target.value }))
  }
  const handleCheck=()=>{
    if(checked===false){
           console.log(checked)
           console.log(checkStyle)
           setcheckStyle({
             checkImg :{display:'inline', zIndex:3},
             inputCheck : { display:'none',zIndex:-5}
             
            })
            setischecked(true)
          }
          if(checked===true){
          console.log(checked)
          console.log(checkStyle)
          setcheckStyle({
            checkImg : {display:'none', zIndex:-5},
             inputCheck : {display:'inline-block',zIndex:3}
           
          })
           setischecked(false)

         }
  }
  
  
  return (
    <div className="contact_wrapper">
      <div className="contact">
        <div className="contact__heading">
          <div className="heading">Contact Me</div>
          <div className="subheading">
            Hi there, contact me about anything you have in mind.
          </div>
        </div>
        <form className="form">
          <div className="name">
            <label htmlFor="first_name">
              First name
              <input
                type="text"
                id="first_name"
                className="name_input"
                placeholder="Enter your first name"
                style={
                  error.firstName.outline === true
                    ? { outline: '3px solid #F89687' }
                    : { outline: 'none' }
                }
                onChange={handleInput}
              />
              <span className="erros">{error.firstName.text}</span>
            </label>
            <label htmlFor="last_name">
              Last name
              <input
                type="text"
                id="last_name"
                className="name_input"
                placeholder="Enter your last name"
                onChange={handleInput}
                style={
                  error.lastName.outline === true
                    ? { outline: '3px solid #F89687' }
                    : { outline: 'none' }
                }
              />
              <span className="erros">{error.lastName.text}</span>
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              style={
                error.email.outline === true
                  ? { outline: '3px solid #F89687' }
                  : { outline: 'none' }
              }
              onChange={handleInput}
              placeholder="chinedumbaodoh@gmail.com"
            />
            <span className="erros">{error.email.text}</span>
          </label>
          <label className="chackbox_align" htmlFor="message">
            Message
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible"
              style={
                error.message.outline === true
                  ? { outline: '3px solid #F89687' }
                  : { outline: 'none' }
              }
              onChange={handleInput}
              name="message"
              id="message"
              cols={30}
              rows={30}
            ></textarea>
            <span className="erros">{error.message.text}</span>
          </label>
          <label className="checkbox_align" htmlFor="terms">
            <div className="check_wrap">
            <input onClick={handleCheck} style={checkStyle.inputCheck} onChange={handleInput} checked={checked} type="checkbox" id="terms" />
            </div>
            <div className="check_text">
              You agree to providing your data to Chinedu Mbaodoh who may
              contact you
            </div>
            <span className="erros" style={{ display: 'block' }}>
              {error.checked.text}
            </span>
          </label>
          <div className="checkimg_wrap">
            <span  onClick={handleCheck} style={checkStyle.checkImg}><img src='../../images/inpimage.png' alt='checkbox'/></span>
          </div>
          <div className="button" onClick={handleSubmit}>
            <button id="btn__submit">Send message</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
