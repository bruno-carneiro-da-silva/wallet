import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="wallet" />
                <button 
                type="button" 
                onClick={onOpenNewTransactionModal}
                >
                    New transaction
                </button>
            </Content>
        </Container>
    )
}