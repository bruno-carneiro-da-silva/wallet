import Modal from 'react-modal';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();
        const data = {
            title,
            value,
            category,
            type
        }
        api.post('/transactions', data)
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>New transaction</h2>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Value"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={income} alt="Income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcome} alt="Outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Register
                </button>
            </Container>
        </Modal>
    )
}   