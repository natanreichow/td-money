import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, Transactionstable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <Transactionstable>
          <tbody>
            <tr>
              <td width="50%">Development from website</td>
              <td>
                <PriceHighlight variant="income">
                  € 4.000,00
                </PriceHighlight>
              </td>
              <td>Sell</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="expense">
                  - € 12,00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </Transactionstable>
      </TransactionsContainer>
    </div>
  )
}