import { SummaryCard, SummaryContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from "react"
import { TransactionContext } from "../../contexts/TransactionsContext"

export function Summary() {
  const { transactions } = useContext(TransactionContext)

  // reduce transactions to { income: 0, expenses: 0, balance: 0 }
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.balance += transaction.price
    } else {
      acc.expenses += transaction.price
      acc.balance -= transaction.price
    }

    return acc
  },
  {
    income: 0,
    expenses: 0,
    balance: 0
  }
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00B37E"/>
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>
        <strong>{summary.expenses}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <CurrencyDollar size={32} color="#FFF"/>
        </header>
        <strong>{summary.balance}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}