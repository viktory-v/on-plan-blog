/* global jQuery, google */
const $maps = jQuery( '.map-canvas' );

if ( $maps.length && theme.googleMapsApiKey ) {
  setTimeout( function() {
    let script = document.createElement( 'script' );
    const src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=' + theme.googleMapsApiKey;

    script.setAttribute( 'src', src );
    script.async = true;
    document.body.appendChild( script );
  }, 2000 );

  global.initMap = () => {
    $maps.each( ( index, element ) => {
      const $map = jQuery( element );
      const position = new google.maps.LatLng( $map.data( 'latitude' ), $map.data( 'longitude' ) );
      const markerIcon = $map.data( 'icon' );
      const mapZoom = $map.data( 'zoom' );
      const map = new google.maps.Map( element, {
        zoom: mapZoom || 17,
        center: position,
        disableDefaultUI: true
      } );

      new google.maps.Marker( {
        position,
        map,
        icon: markerIcon || ''
      } );
    } );
  };
}
