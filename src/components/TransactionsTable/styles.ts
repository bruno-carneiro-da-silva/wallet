import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    table {
        width: 100%;
        border-spacing: 0 0.5rem; //space between lines
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem; //top and bottom, left and right
            line-height: 1.5rem;
            text-align: left;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

                &:first-child { //first td
                    color: var(--text-title);
                }
                &.deposit {
                    color: var(--green);
                }
                &.withdraw {
                    color: var(--red);
                }
        }
    }
`;