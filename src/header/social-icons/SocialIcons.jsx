import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";

export const SocialIcons = () =>{

    const navigate = useNavigate();
    const onClickHandler = (path) => {
        navigate(path)
    }
    return (
        <>
  
        
        <div className="social-icons"> 
        <FaInstagram className="social-icon" />
        <FaFacebook className="social-icon"/>
        <FaLinkedin className="social-icon"/>
        </div>
        </>
    )
}