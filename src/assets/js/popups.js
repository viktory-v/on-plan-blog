/* global jQuery */
jQuery( $ => {
  const $inks = $( '.section-achievement .video-link' );
  const $inksBlog = $( '.section-access .video-link' );

  console.log($inksBlog)

  if ( $inks.length ) {
    require.ensure( [], ( require ) => {
      require( 'magnific-popup' );
      require( 'magnific-popup/dist/magnific-popup.css' );

      $inks.magnificPopup( {
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      } );
    }, 'magnific' );
  }

  if ( $inksBlog.length ) {
    require.ensure( [], ( require ) => {
      require( 'magnific-popup' );
      require( 'magnific-popup/dist/magnific-popup.css' );

      $inksBlog.magnificPopup( {
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      } );
    }, 'magnific' );
  }
} );
