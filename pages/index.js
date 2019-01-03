import React, { useState } from 'react';

import Page from '../components/Page';

export default function Home() {
  const [total, setTotal] = useState(null);
  const scale = num => Math.round(num * 100) / 100;

  return (
    <Page>
      <div className="root">
        <div className="content">
          <div className="inputWrapper">
            <input
              type="number"
              className="input"
              value={total}
              onChange={ev => setTotal(ev.target.value)}
              placeholder="Amount to invest"
            />
          </div>
          <div className="list">
            <div className="item">
              40% TLT (iShares 20+ Year Treasury ETF)
              <div className="result">${scale(total * 0.4)}</div>
            </div>
            <div className="item">
              30% VTI (Vanguard Total Stock Market ETF)
              <div className="result">${scale(total * 0.3)}</div>
            </div>
            <div className="item">
              15% IEF (iShares 7-10 Year Treasury ETF)
              <div className="result">${scale(total * 0.15)}</div>
            </div>
            <div className="item">
              7.50% GLD (SPDR Gold Shares ETF)
              <div className="result">${scale(total * 0.075)}</div>
            </div>
            <div className="item">
              7.50% DBC (PowerShares DB Commodity Index Tracking Fund)
              <div className="result">${scale(total * 0.075)}</div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .root {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .content {
            max-width: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: #222;
          }
          .inputWrapper {
            background: #000;
            align-self: stretch;
            padding: 20px;
          }
          .inputWrapper input {
            padding: 8px;
            font-size: 14px;
            outline: none;
            background: transparent;
            border: 1px solid #777;
            border-radius: 3px;
            color: #f0f0f0;
          }
          .list {
            padding: 20px;
            min-height: 100%;
          }
          .item {
            margin-top: 20px;
          }
          .result {
            height: 20px;
            border-top: 1px solid #777;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
            color: #33ff33;
          }
        `}</style>
      </div>
    </Page>
  );
}
