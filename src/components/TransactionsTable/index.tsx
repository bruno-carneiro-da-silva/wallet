import { useEffect, useState } from "react";
import { Container } from "./styles";

type TransactionProps = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;

}

export function TransactionsTable(){
    const [setTransactions] = useState<TransactionProps | null>(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data)) 
    }, []);


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {transactions?.map(transaction => (
                        <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                    ))} */}
                </tbody>
            </table>
        </Container>
    )
}