import { BsSearch } from "react-icons/bs"
import { Link } from "react-router"
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Qual a moeda... Ex: Bitcoin"
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor de mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24h</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-Label="Moeda">
              <Link to="detail/bitcoin">
                <span>Bitcoin</span> | BTC
              </Link>
            </td>
            <td className={styles.tdLabel} data-Label="Valor de mercado">
              1T
            </td>
            <td className={styles.tdLabel} data-Label="Preço">
              8.000
            </td>
            <td className={styles.tdLabel} data-Label="Volume">
              2B
            </td>
            <td className={styles.tdLabel} data-Label="Mudança 24h">
              <span>1.20</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}