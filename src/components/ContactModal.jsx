import { useState, useRef } from "react"

export default function ContactModal(){
    const [form, setForm] = useState({
        name: "",
        surname:"",
        email:"",
        accept: false
    })
    const [formValid, setFormValid] = useState(true)
    const [formSend, setFormSend] = useState(false)
    const formCloseButton = useRef()

    const mailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    const sendForm = ()=>{
        if(form.name && form.surname && mailRegex.test(form.email) && form.accept){
            setFormValid(true)
            console.log(JSON.stringify(form))
            setForm({
                name: "",
                surname:"",
                email:"",
                accept: false
            })
            setFormSend(true)
            setTimeout(() => {
                setFormSend(false)
                formCloseButton.current.click()
            }, 5000)
        }else
            setFormValid(false)
        
    }

    return (
    <div className="modal fade" id="contactModalCenter" tabIndex="9" data-bs-backdrop="static" aria-labelledby="contactModalCenterModalCenterTitle" style={{display: 'none'}} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn-close" ref={formCloseButton} data-bs-dismiss="modal" aria-label="Close" style={{margin: '10px 30px'}}></button>
                </div>
                <div className="modal-body d-flex justify-content-center" style={{padding: '0px 150px 25px'}}>
                    <div>
                        <div className="mb-3 formSection">
                            <label className="form-label">IMIĘ<span className="redText">*</span></label>
                            <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="form-control" id="FormControlInput1" placeholder=" - wpisz - "/>
                        </div>
                        <div className="mb-3 formSection">
                            <label htmlFor="FormControlInput2" className="form-label">NAZWISKO<span className="redText">*</span></label>
                            <input type="text" value={form.surname} onChange={(e) => setForm({...form, surname: e.target.value})}  className="form-control" id="FormControlInput2" placeholder=" - wpisz - "/>
                        </div>
                        <div className="mb-3 formSection">
                            <label htmlFor="FormControlInput3" className="form-label">ADRES E-MAIL<span className="redText">*</span></label>
                            <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="form-control" id="FormControlInput3" placeholder=" - wpisz - "/>
                        </div>
                        <div className="mb-3 formSection"><span className="redText">*</span> - pola wymagane</div>
                        <div className="form-check mb-3 formSection">
                            <input className="form-check-input" checked={form.accept} onChange={(e) => setForm({...form, accept: e.target.checked})} type="checkbox" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary contactButton" onClick={sendForm} >WYŚLIJ</button>
                        {!formValid?(<span className="redText mt-5" >Proszę uzupełnić wymagane pola !</span>):(<></>)}
                        {formSend?(<span className="greenText mt-5" >Formularz został wysłany !</span>):(<></>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}