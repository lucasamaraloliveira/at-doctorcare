import styled from "styled-components";

export const Container = styled.div`
  background: var(--brand-blue-light);
  height: 16.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 7.88rem;

  a {
    img{
      margin-top:6px;
    }
    
  }

  p {
    color: var(--brand-blue-light-03);
  }


  @media (max-width: 600px) {
    display:none;
  }
`;

export const SocialMedia = styled.ul`
display:flex;
margin-top:3rem;
align-items: center;

li {
          
          font-size: 24px;
          padding: 20px;
            a{
                list-style: none;
                color: var(--white);
            }
            a:hover{
                color: red;
            }
      }
      
`;
