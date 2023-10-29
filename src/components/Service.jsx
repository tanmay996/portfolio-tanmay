import React, { useEffect} from 'react';
import $ from "jquery";

export default function Service() {
    useEffect(() => {
        // Define your iconArray here or import it if it's defined in another file
        const iconArray = {
          'design': ' <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 480 480" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M456 240h-8V72c-.026-22.08-17.92-39.974-40-40H72c-22.08.026-39.974 17.92-40 40v120h-8c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h304a8 8 0 0 0 8-8c-.026-22.08-17.92-39.974-40-40h-24v-48h96v72c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V264c0-13.255-10.745-24-24-24zM176 424a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-8h160v8zm0-24H16V216a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v184zm120 16a24.047 24.047 0 0 1 22.632 16H190.528a23.725 23.725 0 0 0 1.472-8v-8h104zm-104-16v-48h16v48h-16zm32 0v-48h32v48h-32zm144-64H192v-48h176v48zm0-72v8H192v-56a23.713 23.713 0 0 0-2.736-10.888c.12-.112.28-.144.392-.264l79.2-79.2a8 8 0 0 0-11.312-11.312l-79.2 79.2c-.192.2-.272.456-.44.664A23.699 23.699 0 0 0 168 192H48V72c0-13.255 10.745-24 24-24h336c13.255 0 24 10.745 24 24v168h-40c-13.255 0-24 10.745-24 24zm96 160a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-8h80v8zm0-24h-80V264a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v136z" fill="#ffbd39" opacity="1" data-original="#000000" class=""></path><path d="M95.592 289.376a8 8 0 0 0-11.312 0l-33.936 33.936a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l33.936-33.936c1.428-2.475-1.442-7.18 0-11.312zM143.396 289.376a8.001 8.001 0 0 0-11.116 0l-33.936 33.936a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l33.936-33.936a8 8 0 0 0-.196-11.312zM317.46 114.344a8.001 8.001 0 0 0-11.116 0l-79.2 79.2a8 8 0 1 0 11.312 11.312l79.2-79.2a8 8 0 0 0-.196-11.312zM440.772 311.032a8 8 0 0 0-11.116 0l-22.624 22.624a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l22.624-22.624a8 8 0 0 0-.196-11.312zM240.16 304h-.08a8 8 0 0 0 .08 16 8 8 0 0 0 0-16zM256 64h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16z" fill="#ffbd39" opacity="1" data-original="#000000" class=""></path></g></svg>' ,

          'design1': ' <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 480 480" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M456 240h-8V72c-.026-22.08-17.92-39.974-40-40H72c-22.08.026-39.974 17.92-40 40v120h-8c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h304a8 8 0 0 0 8-8c-.026-22.08-17.92-39.974-40-40h-24v-48h96v72c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V264c0-13.255-10.745-24-24-24zM176 424a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-8h160v8zm0-24H16V216a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v184zm120 16a24.047 24.047 0 0 1 22.632 16H190.528a23.725 23.725 0 0 0 1.472-8v-8h104zm-104-16v-48h16v48h-16zm32 0v-48h32v48h-32zm144-64H192v-48h176v48zm0-72v8H192v-56a23.713 23.713 0 0 0-2.736-10.888c.12-.112.28-.144.392-.264l79.2-79.2a8 8 0 0 0-11.312-11.312l-79.2 79.2c-.192.2-.272.456-.44.664A23.699 23.699 0 0 0 168 192H48V72c0-13.255 10.745-24 24-24h336c13.255 0 24 10.745 24 24v168h-40c-13.255 0-24 10.745-24 24zm96 160a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-8h80v8zm0-24h-80V264a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v136z" fill="#fff" opacity="1" data-original="#000000" class=""></path><path d="M95.592 289.376a8 8 0 0 0-11.312 0l-33.936 33.936a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l33.936-33.936c1.428-2.475-1.442-7.18 0-11.312zM143.396 289.376a8.001 8.001 0 0 0-11.116 0l-33.936 33.936a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l33.936-33.936a8 8 0 0 0-.196-11.312zM317.46 114.344a8.001 8.001 0 0 0-11.116 0l-79.2 79.2a8 8 0 1 0 11.312 11.312l79.2-79.2a8 8 0 0 0-.196-11.312zM440.772 311.032a8 8 0 0 0-11.116 0l-22.624 22.624a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l22.624-22.624a8 8 0 0 0-.196-11.312zM240.16 304h-.08a8 8 0 0 0 .08 16 8 8 0 0 0 0-16zM256 64h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16z" fill="#fff" opacity="1" data-original="#000000" class=""></path></g></svg>' ,


       
           'person':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 50 50" xml:space="preserve" class=""><g transform="matrix(1,0,0,1,0,0)"><path d="M55 45.006V41a5.006 5.006 0 0 0-5-5h-8.418a28.187 28.187 0 0 0 2.228-5.367l3.8-3.041a3.694 3.694 0 0 0-2.188-6.579l2.228-6.126A10.35 10.35 0 0 0 37.924 1h-8.49A33.865 33.865 0 0 0 11.47 6.152a1 1 0 0 0 .214 1.8l2.411.8a2.568 2.568 0 0 1 1.572 3.389 4.568 4.568 0 0 0 .155 3.739l2.578 5.151a3.689 3.689 0 0 0-2.008 6.561l3.8 3.041A28.187 28.187 0 0 0 22.418 36H14a5.006 5.006 0 0 0-5 5v4.006A13.018 13.018 0 0 0 1 57v5a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-5a13.018 13.018 0 0 0-8-11.994ZM40 21h-6a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-1-1h-9v-1.465l6.242-4.161A8.155 8.155 0 0 1 31.78 14a10.212 10.212 0 0 0 6.359-2.231l1.634-1.307 1.715 2.574A8.969 8.969 0 0 1 43 18.028V21Zm-1 2v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3Zm-10 0v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3Zm18 1.7a1.694 1.694 0 0 1-.638 1.328l-1.813 1.45A28.141 28.141 0 0 0 44.984 23h.316a1.7 1.7 0 0 1 1.7 1.7ZM17.523 12.884a4.568 4.568 0 0 0-2.795-6.029l-.306-.1A31.863 31.863 0 0 1 29.434 3h8.49a8.35 8.35 0 0 1 7.847 11.2l-.869 2.39a10.966 10.966 0 0 0-1.75-4.668l-2.32-3.481a1 1 0 0 0-.679-.433 1.01 1.01 0 0 0-.778.207l-2.485 1.993A8.215 8.215 0 0 1 31.78 12a10.152 10.152 0 0 0-5.648 1.71l-6.687 4.458a.992.992 0 0 0-.17.146l-1.664-3.329a2.567 2.567 0 0 1-.088-2.101Zm.116 13.146A1.7 1.7 0 0 1 18.7 23h.314a28.141 28.141 0 0 0 .435 4.48ZM21.016 23H23v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1h2v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-3h1.984a26.183 26.183 0 0 1-3.711 13H24.727a26.183 26.183 0 0 1-3.711-13ZM14 38h36a3 3 0 0 1 3 3v20H11V41a3 3 0 0 1 3-3ZM3 57a11.016 11.016 0 0 1 6-9.793V61H3Zm58 4h-6V47.207A11.017 11.017 0 0 1 61 57Z" fill="#ffbd39" opacity="1" data-original="#000000" class=""></path><path d="M32 58a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM25.293 48.707l1.414-1.414L23.414 44l3.293-3.293-1.414-1.414-4 4a1 1 0 0 0 0 1.414ZM38.707 48.707l4-4a1 1 0 0 0 0-1.414l-4-4-1.414 1.414L40.586 44l-3.293 3.293ZM28.2 47.399l6-7.999 1.6 1.2-6.001 8z" fill="#ffbd39" opacity="1" data-original="#000000" class=""></path></g></svg>',
              
        'person1':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M55 45.006V41a5.006 5.006 0 0 0-5-5h-8.418a28.187 28.187 0 0 0 2.228-5.367l3.8-3.041a3.694 3.694 0 0 0-2.188-6.579l2.228-6.126A10.35 10.35 0 0 0 37.924 1h-8.49A33.865 33.865 0 0 0 11.47 6.152a1 1 0 0 0 .214 1.8l2.411.8a2.568 2.568 0 0 1 1.572 3.389 4.568 4.568 0 0 0 .155 3.739l2.578 5.151a3.689 3.689 0 0 0-2.008 6.561l3.8 3.041A28.187 28.187 0 0 0 22.418 36H14a5.006 5.006 0 0 0-5 5v4.006A13.018 13.018 0 0 0 1 57v5a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-5a13.018 13.018 0 0 0-8-11.994ZM40 21h-6a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-1-1h-9v-1.465l6.242-4.161A8.155 8.155 0 0 1 31.78 14a10.212 10.212 0 0 0 6.359-2.231l1.634-1.307 1.715 2.574A8.969 8.969 0 0 1 43 18.028V21Zm-1 2v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3Zm-10 0v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3Zm18 1.7a1.694 1.694 0 0 1-.638 1.328l-1.813 1.45A28.141 28.141 0 0 0 44.984 23h.316a1.7 1.7 0 0 1 1.7 1.7ZM17.523 12.884a4.568 4.568 0 0 0-2.795-6.029l-.306-.1A31.863 31.863 0 0 1 29.434 3h8.49a8.35 8.35 0 0 1 7.847 11.2l-.869 2.39a10.966 10.966 0 0 0-1.75-4.668l-2.32-3.481a1 1 0 0 0-.679-.433 1.01 1.01 0 0 0-.778.207l-2.485 1.993A8.215 8.215 0 0 1 31.78 12a10.152 10.152 0 0 0-5.648 1.71l-6.687 4.458a.992.992 0 0 0-.17.146l-1.664-3.329a2.567 2.567 0 0 1-.088-2.101Zm.116 13.146A1.7 1.7 0 0 1 18.7 23h.314a28.141 28.141 0 0 0 .435 4.48ZM21.016 23H23v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1h2v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-3h1.984a26.183 26.183 0 0 1-3.711 13H24.727a26.183 26.183 0 0 1-3.711-13ZM14 38h36a3 3 0 0 1 3 3v20H11V41a3 3 0 0 1 3-3ZM3 57a11.016 11.016 0 0 1 6-9.793V61H3Zm58 4h-6V47.207A11.017 11.017 0 0 1 61 57Z" fill="#fff" opacity="1" data-original="#000000" class=""></path><path d="M32 58a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM25.293 48.707l1.414-1.414L23.414 44l3.293-3.293-1.414-1.414-4 4a1 1 0 0 0 0 1.414ZM38.707 48.707l4-4a1 1 0 0 0 0-1.414l-4-4-1.414 1.414L40.586 44l-3.293 3.293ZM28.2 47.399l6-7.999 1.6 1.2-6.001 8z" fill="#fff" opacity="1" data-original="#000000" class=""></path></g></svg>',
        
          'frontend-developer':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M43 11h2v2h-2z" fill="#ffbd39" opacity="1" data-original="#000000" class=""></path><path d="M59.032 18a3.06 3.06 0 0 0-3.011 2.794L54 30.4V8a6.006 6.006 0 0 0-6-6c-8.26.009-8.412.024-8.477.031a3.283 3.283 0 0 0-3.027 3.576A3.5 3.5 0 0 0 39 8.852V27h-1a2.977 2.977 0 0 0-1.287.3A.994.994 0 0 0 36 27h-8a1 1 0 0 0-1 1v3H17v-7h2a5.006 5.006 0 0 0 5 5 1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 5.006 5.006 0 0 0-5 5v6h-3a5.006 5.006 0 0 0-5 5v2h-1a6.006 6.006 0 0 0-6 6H3a1 1 0 0 0-1 1v29a1 1 0 0 0 1 1h37a1 1 0 0 0 1-1V45h6v7.118A3.783 3.783 0 0 0 44 56v.184A3.019 3.019 0 1 0 47.816 58h4.368A2.966 2.966 0 0 0 52 59a3 3 0 1 0 4-2.816V56a3.783 3.783 0 0 0-3-3.882V45h4a1 1 0 0 0 .983-.821l4-21.992a3.845 3.845 0 0 0-.691-3.15A2.872 2.872 0 0 0 59.032 18ZM21 12a3.006 3.006 0 0 1 2-2.829v17.658A3.006 3.006 0 0 1 21 24Zm8 17h6v2h-6Zm-16-6a3 3 0 0 1 3-3h3v2h-3a1 1 0 0 0-1 1v8h-2Zm-3 4h1v4H6a4 4 0 0 1 4-4ZM4 42h2v-2H4v-2h4v6H4Zm35 18H4v-4h35Zm0-6H4v-8h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H4v-3h35Zm0-23h-1a1 1 0 0 1 0-2h1Zm1-24a1.487 1.487 0 0 1-1.508-1.494 1.324 1.324 0 0 1 1.185-1.482C39.985 4.013 44.824 4 48 4a4 4 0 0 1 4 4v7h-2.171A3 3 0 0 0 48 11.171V8a1 1 0 0 0-1-1Zm1 28v-2h4a4 4 0 0 0 4-4v-3a3 3 0 0 0-6 0v1h-2v-6h11v14Zm11 2v2H41v-2Zm-11-6v-2h3a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2Zm0-12v-2h3v-2h-3V9h5v3a1 1 0 0 0 1 1 1 1 0 0 1 0 2 1 1 0 0 0 0 2h5v2Zm4 41a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-1-2h-8a1.856 1.856 0 0 1 2-2h4a1.856 1.856 0 0 1 2 2Zm-5-4v-7h2v7Zm11.017-30.179L56.165 43H41v-2h12a1 1 0 0 0 .979-.794l4-19.019C58.209 20 58.786 20 59.032 20a.874.874 0 0 1 .718.312 1.887 1.887 0 0 1 .267 1.509Z" fill="#ffbd39" opacity="1" data-original="#000000" class=""></path></g></svg>',

          'frontend-developer1':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M43 11h2v2h-2z" fill="#fff" opacity="1" data-original="#000000" class=""></path><path d="M59.032 18a3.06 3.06 0 0 0-3.011 2.794L54 30.4V8a6.006 6.006 0 0 0-6-6c-8.26.009-8.412.024-8.477.031a3.283 3.283 0 0 0-3.027 3.576A3.5 3.5 0 0 0 39 8.852V27h-1a2.977 2.977 0 0 0-1.287.3A.994.994 0 0 0 36 27h-8a1 1 0 0 0-1 1v3H17v-7h2a5.006 5.006 0 0 0 5 5 1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 5.006 5.006 0 0 0-5 5v6h-3a5.006 5.006 0 0 0-5 5v2h-1a6.006 6.006 0 0 0-6 6H3a1 1 0 0 0-1 1v29a1 1 0 0 0 1 1h37a1 1 0 0 0 1-1V45h6v7.118A3.783 3.783 0 0 0 44 56v.184A3.019 3.019 0 1 0 47.816 58h4.368A2.966 2.966 0 0 0 52 59a3 3 0 1 0 4-2.816V56a3.783 3.783 0 0 0-3-3.882V45h4a1 1 0 0 0 .983-.821l4-21.992a3.845 3.845 0 0 0-.691-3.15A2.872 2.872 0 0 0 59.032 18ZM21 12a3.006 3.006 0 0 1 2-2.829v17.658A3.006 3.006 0 0 1 21 24Zm8 17h6v2h-6Zm-16-6a3 3 0 0 1 3-3h3v2h-3a1 1 0 0 0-1 1v8h-2Zm-3 4h1v4H6a4 4 0 0 1 4-4ZM4 42h2v-2H4v-2h4v6H4Zm35 18H4v-4h35Zm0-6H4v-8h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H4v-3h35Zm0-23h-1a1 1 0 0 1 0-2h1Zm1-24a1.487 1.487 0 0 1-1.508-1.494 1.324 1.324 0 0 1 1.185-1.482C39.985 4.013 44.824 4 48 4a4 4 0 0 1 4 4v7h-2.171A3 3 0 0 0 48 11.171V8a1 1 0 0 0-1-1Zm1 28v-2h4a4 4 0 0 0 4-4v-3a3 3 0 0 0-6 0v1h-2v-6h11v14Zm11 2v2H41v-2Zm-11-6v-2h3a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2Zm0-12v-2h3v-2h-3V9h5v3a1 1 0 0 0 1 1 1 1 0 0 1 0 2 1 1 0 0 0 0 2h5v2Zm4 41a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-1-2h-8a1.856 1.856 0 0 1 2-2h4a1.856 1.856 0 0 1 2 2Zm-5-4v-7h2v7Zm11.017-30.179L56.165 43H41v-2h12a1 1 0 0 0 .979-.794l4-19.019C58.209 20 58.786 20 59.032 20a.874.874 0 0 1 .718.312 1.887 1.887 0 0 1 .267 1.509Z" fill="#fff" opacity="1" data-original="#000000" class=""></path></g></svg>',
        };
    
            
       


        // Function to replace icons
        function svgIcon(e) {
          $(e).each(function () {
            const dataIcon = $(this).attr('data-icon');
            if (dataIcon in iconArray) {
              $(this).replaceWith(iconArray[dataIcon]);
            }
          });
        }
    
        // Call the svgIcon function to replace icons
        svgIcon('.n-icon');
      }, []);

     
    return (
        <div className="container" id="service" data-aos="fade-up" data-aos-duration="1000" >
            <div className="service p-3">
                <div className='heading text-center '>
                    <span className="heading-1">Service</span>
                    <span className="heading-2 head-2">Service</span>
                </div>
                <div className="row mt-5 pt-4" >
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-duration="1000" >
                        <div className='service-section'>
                            <div className="icon text-center mb-5" >

                                   <span className='design '> <i className="n-icon" data-icon='design' ></i></span>
                                   <span className='design1'> <i className="n-icon" data-icon='design1' ></i></span>
    
                            </div>
                            <h3 className="service-text position-relative text-center">WEB DESIGN</h3>
                        </div>          
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-duration="1000" >
                        <div className='service-section mobile-service-view'>
                            <div className="icon text-center mb-5">
                            <span className='person'> <i className="n-icon" data-icon='person' ></i></span>
                            <span className='person1'> <i className="n-icon" data-icon='person1' ></i></span>
                            </div>
                            <h3 className="service-text position-relative text-center">WEB Developer</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-duration="1000" >
                        <div className='service-section'>
                            <div className="icon text-center mb-5">
                            <span className='frontend-developer'> <i className="n-icon" data-icon='frontend-developer' ></i></span>
                            <span className='frontend-developer1'> <i className="n-icon" data-icon='frontend-developer1' ></i></span>
                                
                            </div>
                            <h3 className="service-text position-relative text-center">Frontend developer</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
