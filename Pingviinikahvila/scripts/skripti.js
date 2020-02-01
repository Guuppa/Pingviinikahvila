// kun sivu on latautunut auki
$(document).ready(function() {
    setPerfectHeight();
});

// kun ikkunan kokoa muutetaan
$(window).resize(function() {
    setPerfectHeight();
});

// aseta ig-kuvien korkeudeksi sama kuin leveys --> neliö
function setPerfectHeight() {
    $(".small img").each(function() {
        var wantedSize = $( this ).width();
        $( this ).height(wantedSize);
    });
}
