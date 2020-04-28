import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={"container"}>
          {/* ナビゲーション */}
          <ul className={"gnavi"}>
            <li><Link to="/">名産品図鑑</Link></li>
            <li>┣ <Link to="/area/1">埼玉県</Link></li>
            <li>┗ <Link to="/area/2">島根県</Link></li>
          </ul>

          {/* ここから下が実際のコンテンツに置き換わる */}
          {/* RouteをSwitchの中に列挙することでどれか１つだけ実行される */}
          {/* 上から順に比較され最初にマッチしたものが実行される */}
          {/* どのルーティングにもマッチしない場合はRouteのpath属性を指定しないことで404：NotFoundの処理を定義する */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index.html" component={Home} />
            <Route path="/area/:cd" component={Meisan} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

/**
 * トップページ
 */
function Home(){
  return (
    <div className={"item"}>
      <h2>名産品図鑑</h2>
      <ul>
        <li><Link to="/area/1">埼玉県<br /><img src="/image/saitama.png" /></Link></li>
        <li><Link to="/area/2">島根県<br /><img src="/image/shimane.png" /></Link></li>
      </ul>
    </div>
  );
}

/**
 * 404
 */
function NoMatch(){
  return (
    <div className={"item"}>
      <h2>URLが存在しません</h2>
    </div>
  );
}

/**
 * 名産品Component
 */
class Meisan extends Component{
  constructor(props){
    super(props);
    this.area =[
      {
        cd: 1,
        name: "埼玉県",
        img:  "/image/saitama.png",
        meisan: ["十万石まんじゅう", "深谷ねぎ", "草加せんべい", "いも"]
      },
      {
        cd: 2,
        name: "島根県",
        img: "/image/shimane.png",
        meisan: ["しじみ", "あご野焼", "出雲そば", "ぶどう"]
      }
    ];
  }

  render(){
    let cd = this.props.match.params.cd;

    if( (0 < cd) && (cd <= this.area.length) ){
      let area = this.area[cd - 1];
      let key  = 1;
      let li = area.meisan.map( val => <li key={key++}>{val}</li> );
      return (
        <div className={"item"}>
          <h2>{area.name}</h2>
          <img src={area.img} />
          <ul>
            {li}
          </ul>
        </div>
      );
    }
    else{
      return (
        <div className={"item"}>
          <h2>Not Found</h2>
        </div>
      );
    }
  }
}

export default App;