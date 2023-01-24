import styled from "styled-components";

export const Container = styled.div`
  background: var(--brand-blue-light-02);
  height: 4.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    img{
      margin-top:6px;
    }
    
  }

  ul {
    display: flex;
    gap: 2rem;

      a {
        color: var(--brand-blue-light);
        
      }
      a:hover {
        transition:0.2s;
        cursor: pointer;
        font-weight: bold;
        color: var(--brand-blue-light);
        border-bottom: 2px solid var(--brand-blue-light);
        padding-bottom:20px;
      }
    }
    
    button {
    width:200px;
    padding: 1rem;
    background-color: var(--brand-blue-light-02);
    color: var(--brand-blue-light);
    font-weight: bold;
    border: 1px solid var(--brand-blue-light);
    border-radius: 2.5rem;
  }
  button:hover {
    color: var(--white);
    background-color: var(--brand-blue-light);
    cursor: pointer;
    transition: 0.5s;
  }

  @media (max-width: 600px) {
    display:none;
  }
`;

 
