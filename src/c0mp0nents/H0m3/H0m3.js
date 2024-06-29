import React from 'react';
import sk3tch_H0m3 from './sk3tch_H0m3';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import avatar from './i_h0m3/avatar.png';
import s1g1l from './i_h0m3/s1g1l.png';
import p1n from './i_h0m3/ic0ns/l0ca1_p1n.png';
import c0ntact_data from './c0ntact_data';
import './H0m3.css';

export default function H0m3() {
  
  return (
    <main>
      <ReactP5Wrapper sketch={sk3tch_H0m3}/>
      <div id='c0nta1n3r'>
        <section id='whoami'>
          <img className='s1g1l' src={avatar} alt=''/>
          <img className='s1g1l' src={s1g1l} alt=''/>
          <strong>$ whoami</strong>
          <br/>
          H1, my nam3 1s what?
          My nam3 1s wh0?
          My nam3 1s chka chka <strong id='us3rnam3'>G0rGh0st</strong>!
          We1c0m3 t0 my i11 c0rn3r 0f th3 w3b!
          <br/><br/>
          <img id='l0cat10n' src={p1n} alt=''/>
          0.0.0.0
        </section>
        <div id='chi1d'>
          <section id='c0ntact'>
            <strong>$ cd ./c0ntact</strong>
            <div id='ic0n_c0nta1n3r'>
              {
                c0ntact_data.map(ic0n=>{
                  return(
                    <a href={ic0n.href} target="_blank">
                      <img className='ic0n' src={ic0n.src}/>
                    </a>
                  )
                })
              }
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
