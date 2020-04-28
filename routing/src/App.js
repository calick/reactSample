import React, {Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/public/">
      {/* ルーティングの設定（URLとComponentの関連付け）*/}
        <div className={"container"}>
          {/* ナビゲーション */}
          <ul className={"gnavi"}>
            <li><Link to="/">名産品図鑑</Link></li>
            <li>┣ <Link to="/saitama">埼玉県</Link></li>
            <li>┗ <Link to="/shimane">島根県</Link></li>
          </ul>

          {/* ここから下が実際のコンテンツに置き換わる */}
          {/* exact属性はlocation.pathnameと完全にマッチした場合のみに実行される　アンカーやクエリーがついていた場合は実行されない */}
          <Route exact path="/" component={Home} />
          <Route path="/saitama" component={Saitama} />
          <Route path="/shimane" component={Shimane} />
        </div>
      </Router>
    );
  }
}

/**
 * トップページ
 */
function Home() {
  return (
    <div className={"item"}>
      <h2>名産品図鑑</h2>
      <ul>
        <li><Link to="/saitama">埼玉県<br /><img src="/image/saitama.png" /></Link></li>
        <li><Link to="/shimane">島根県<br /><img src="/image/shimane.png" /></Link></li>
      </ul>
    </div>
  );
}

/**
 * 埼玉県
 */
function Saitama() {
  return (
    <div className={"item"}>
      <h2>埼玉県の名産品</h2>
      <img src="/image/saitama.png" />
      <ol>
        <li>十万石まんじゅう</li>
        <li>深谷ねぎ</li>
        <li>草加せんべい</li>
        <li>いも</li>
      </ol>
    </div>
  );
}

/**
 * 島根県
 */
function Shimane() {
  return (
    <div className={"item"}>
      <h2>島根県の名産品</h2>
      <img src="/image/shimane.png" />
      <ol>
        <li>しじみ</li>
        <li>あご野焼</li>
        <li>出雲そば</li>
        <li>ぶどう</li>
      </ol>
    </div>
  );
}

export default App;

