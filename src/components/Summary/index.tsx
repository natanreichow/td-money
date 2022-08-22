import { SummaryCard, SummaryContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00B37E"/>
        </header>
        <strong>€ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>
        <strong>€ 12.900,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <CurrencyDollar size={32} color="#FFF"/>
        </header>
        <strong>€ 5.500,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}