import React from 'react';
import sk3tch_H0m3 from './sk3tch_H0m3';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import avatar from './i_h0m3/avatar.png';
import p1n from './i_h0m3/ic0ns/l0ca1_p1n.png';
import c0ntact_data from './c0ntact_data';
import './H0m3.css';

export default function H0m3() {
  
  return (
    <main>
      <ReactP5Wrapper sketch={sk3tch_H0m3}/>
      <div id='c0nta1n3r'>
        <section id='whoami'>
          <img id='avatar' src={avatar} alt=''/>
          <div id='s1g1l'>
            <p>
              <strong>$ whoami</strong>
              <br/><br/>
              H1, my nam3 1s what?
              My nam3 1s wh0?
              My nam3 1s chka chka <strong id='us3rnam3'>G0rGh0$t</strong>!
              We1c0m3 t0 my i11 c0rn3r 0f th3 w3b!
              <br/><br/>
              1'm a $3cur1ty r3$3arch3r & d3v310p3r 0f un1ic3n$3d $0ftwar3.
              <br/><br/>
              Curr3nt1y 1nt0 mak1ng c001 w3b$1t3$ f0r art1$t$ & cr3at0r$,
              f331 fr33 t0 r3ach 0ut @ <strong>g0rgh0st@protonmail.com</strong>
              <br/><br/>
              <img id='l0cat10n' src={p1n} alt=''/>
              0.0.0.0
            </p>
          </div>
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
