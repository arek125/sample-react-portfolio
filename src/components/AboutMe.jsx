import SectionHeader from "./SectionHeader"
import aboutMeLogo from "@/assets/aboutMe.png"

export default function AboutMe(){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8"  style={{textAlign: 'start'}}>
                    <img src={aboutMeLogo} className="img-fluid"/>
                </div>
                <div className="col-lg-4" style={{textAlign: 'start'}}>
                    <SectionHeader txt="O MNIE"/>
                    <span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                        
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}