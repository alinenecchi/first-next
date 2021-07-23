
import React, { useState } from 'react';
import ListItem from '../components/ListItem'
import NewTaskInput from '../components/NewTaskInput'
import { render } from 'react-dom';
import Menu from '../components/Menu';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../components/Video';
import VideoApp from '../components/Video';

function Home() {
    /*window.onload = function() {
        // Pega todos os elementos correspondentes
        const copyTextareaBtn = Array.prototype.slice.call(document.querySelectorAll('.js-textareacopybtn'));
        const copyTextarea = Array.prototype.slice.call(document.querySelectorAll('.js-copytextarea'));
     
        // Laço para percorrer todos os elementos
        copyTextareaBtn.forEach(function(btn, idx) {
     
          btn.addEventListener("click", function() {
     
            // Copia o conteudo do textarea
            copyTextarea[idx].select();
     
              var msg = document.execCommand('copy') 
                ? 'funcionou' : 'deu erro';
              console.log('Compando para copiar texto ' + msg);
     
          });
     
        });
      }*/
  
      
    return (
        <div>
            
            <Menu/>
            <div>
                <p>Teste #1
                <textarea class="js-copytextarea">Texto para copiar #1</textarea>
                <button class="js-textareacopybtn">Copiar</button>
                </p>
            
                <p>Teste #2:
                <textarea class="js-copytextarea">Texto para copiar #2</textarea>
                <button class="js-textareacopybtn">Copiar</button>
                </p>
            </div>
        </div>
    )
   
  }
export default Home