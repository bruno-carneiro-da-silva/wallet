import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem; // 32px

    margin-top: -10rem; // 160px

    div {
        background: var(--shape);
        padding: 1.5rem 2rem; // 24px 32px
        border-radius: 0.25rem; // 4px
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; // por padrão o strong é inline
            margin-top: 1rem; // 16px
            font-size: 2rem; // 32px
            font-weight: 500;
            line-height: 3rem; // 48px
        }

        &.highlight-background { // & = faz referencia ao elemento pai
            background: var(--green);
            color: #fff;
        }
    }
`;