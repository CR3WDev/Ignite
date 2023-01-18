import { Post } from "./post";
import "./global.css";
import {Header} from "./components/Header.jsx";
import styles from "./App.module.css";
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
  return (
      <div>
          <Header />
          <div className={styles.wrapper}>
              <Sidebar />
              <main>
                  <Post author="CR3W" content="teste teste teste de texto"></Post>
                  <Post author="CR3W2" content="dsdsadteste teste teste de texto"></Post>
              </main>
          </div>
      </div>
  )
}
