/* eslint-disable no-var */
import googleFontsLoader from './google-fonts-loader';
//import './block';
import './blog';
import './forms';
import './header';
import './light-tabs';
//import './map';
import './popups';
import './retina';
import './sliders';
import './smooth-scroll';
import './target-blank';
import '../../woo/js';

googleFontsLoader( [
  'Poppins:300,400,500,600,700',
  'Kalam:300,400,500,600,700',
  'Open Sans:300,400,500,600,700'
] );

jQuery( $ => {
  const $faqs = $( '.section-faq-page .single-faq' );

  $( '.section-tabs .services .wrap' ).lightTabs();

  if ( $faqs.length ) {
    $faqs.find("> a").click((e) => {
      e.preventDefault()
      $(e.target).parent().toggleClass('active');
    });
  }

  dropdown();
  
} );

function dropdown() {
  const avatarTriggers = document.querySelectorAll('.avatar-preview'); 
  const avatarOverlays = document.querySelectorAll('.avatar');

  for (const trigger of avatarTriggers) {
    trigger.addEventListener('click', (event) => {
      const avatar = trigger.closest('.avatar')
      avatar.classList.toggle('active')
    })
  }

  document.addEventListener('click', (event) => {
    const avatar = event.target.closest('.avatar')

    if (!avatar) {
      for (const avatarItem of avatarOverlays ) {
        avatarItem.classList.remove('active')
      }
    }
  })
}

