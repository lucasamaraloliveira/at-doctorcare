import styled from "styled-components";

export const BrandMobile = styled.div`
@media (max-width: 600px) {

    max-width:100%;
        
  }
`


export const Hamburguer = styled.button`
    color: var(--brand-blue-light);
    background-color: var(--light-gray);
    transition: 0.4;
      

@media (max-width: 600px) {
    
    font-size:2rem;
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
           
  }
  :hover {
    cursor: pointer;
  }

  
`


export const MenuOpen = styled.ul`
display:none;

@media (max-width: 600px) {
    display:none;
    background-color: var(--brand-blue-light);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

      .close-button {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: var(--brand-blue-light);
        font-size:2rem;
        color: var(--white);
    
      }

      .schedule-now {
        width:200px;
        padding: 1rem;
        background-color: var(--white);
        color: var(--brand-blue-light);
        font-weight: bold;
        border: 1px solid var(--white);
        border-radius: 2.5rem;
        :hover {
          color: var(--white);
          background-color: var(--brand-blue-light);
          cursor: pointer;
          transition: 0.5s;
          }
        }
 
    button:hover {
        opacity:0.7;
        cursor:pointer;
    
    }
      li {
          
          font-size: 24px;
          padding: 20px;
            a{
                list-style: none;
                color: var(--white);
            }
            a:hover{
                opacity:0.7;
            }
      }
    
  }
`;

export const SocialMedia = styled.ul`
display:flex;
margin-top:3rem;
`

 
