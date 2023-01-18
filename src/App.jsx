import { Post } from "./post";
import "./global.css";
import {Header} from "./components/header.jsx";
import styles from "./App.module.css";

export function App() {
  return (
      <div>
          <Header />
          <div className={styles.wrapper}>
              <aside>
                  sidebar
              </aside>
              <main>
                  <Post author="CR3W" content="teste teste teste de texto"></Post>
                  <Post author="CR3W2" content="dsdsadteste teste teste de texto"></Post>
              </main>
          </div>
      </div>
  )
}
