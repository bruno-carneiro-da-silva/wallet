import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem; // 1rem = 16px
    display: flex;
    align-items: center; 
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        border-radius: 0.25rem; // 4px
        padding: 0 2rem; // 32px
        height: 3rem; // 48px
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;