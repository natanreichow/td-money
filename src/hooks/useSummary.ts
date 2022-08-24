import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    transactions.reduce(
      (acc, transaction) => {
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
        balance: 0,
      },
    )
  }, [transactions])

  return summary
}
