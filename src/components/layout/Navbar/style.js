import styled from "styled-components";

export const Container = styled.div`
  background: var(--brand-blue-light-02);
  height: 4.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
    gap: 2rem;

    a {
      color: var(--brand-blue-light);
    }
    a:hover {
      transition: 0.4s;
      opacity: 0.7;
      cursor: pointer;
    }
  }

  button {
    padding: 1rem;
    background-color: var(--brand-blue-light-02);
    color: var(--brand-blue-light);
    font-weight: bold;
    border: 1px solid var(--brand-blue-light);
    border-radius: 40px;
  }
  button:hover {
    color: var(--white);
    background-color: var(--brand-blue);
    cursor: pointer;
    transition: 0.5s;
  }
`;
