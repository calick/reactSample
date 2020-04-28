# propsで渡せるデータ型

// 文字列
<RemainTime date="2112-09-03 00:00:00" />

// 数値
<RemainTime time={4502271600000} />

// 真偽値(Boolean)
<RemainTime isDate={true} />

// 配列
<RemainTime date={["2112-09-03", "2114-12-02"]} />

// 連想配列(ハッシュ)
<RemainTime date={{"doraemon":"2112-09-03", "dorami":"2114-12-02"}} />

// 関数
<RemainTime callback={ (day)=>{alert(day)} } />


RemainTime.propTypes = {
  foo1: PropTypes.string,   //文字列
  foo2: PropTypes.number,   //数値
  foo3: PropTypes.bool,     //真偽値
  foo4: PropTypes.array,    //配列
  foo5: PropTypes.func,     //関数
  foo6: PropTypes.object,   //オブジェクト
  foo7: PropTypes.symbol    //シンボル
};
