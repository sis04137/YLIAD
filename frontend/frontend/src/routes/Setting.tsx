import { Link } from "react-router-dom";
import base from "./Base.module.css";
import Stars2 from "../components/layout/Stars2";
import Navbar from "../components/layout/Navbar";
import styles from "./Setting.module.css";
import { BrowserView, MobileView } from "react-device-detect";

function Setting() {
  return (
    <>
      <Navbar />
      <Stars2 />
      <BrowserView>
        <div className={base.container}>
          <div className={styles.P_container}>
            <h1 id={styles.title_P}>환경 설정</h1>

            <Link to="/theme">
              <button id={styles.btn1_P}> 테마 변경 </button>
            </Link>
            <Link to="/bgm">
              <button id={styles.btn1_P}> BGM 변경 </button>
            </Link>
            <Link to="/fontchange">
              <button id={styles.btn1_P}> 폰트 변경 </button>
            </Link>
            <Link to="/infochange">
              <button id={styles.btn1_P}> 개인정보 변경 </button>
            </Link>

          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className={base.container}>
          <div className={styles.M_container}>
            <h1 id={styles.title_M}>환경 설정</h1>

            <Link to="/theme">
              <button id={styles.btn1_M}> 테마 변경 </button>
            </Link>
            <Link to="/bgm">
              <button id={styles.btn1_M}> BGM 변경 </button>
            </Link>
            <Link to="/fontchange">
              <button id={styles.btn1_M}> 폰트 변경 </button>
            </Link>
            <Link to="/infochange">
              <button id={styles.btn1_M}> 개인정보 변경 </button>
            </Link>
  
          </div>
        </div>
      </MobileView>
    </>
  );
}

export default Setting;
