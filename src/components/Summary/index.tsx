import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, Wallet } from 'phosphor-react'
import { priceFormater } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormater.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormater.format(summary.expenses)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <Wallet size={32} color="#FFF" />
        </header>
        <strong>{priceFormater.format(summary.balance)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
