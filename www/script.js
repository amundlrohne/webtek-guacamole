if(document.querySelector("header")){

    header = document.querySelector("header");

    header.innerHTML = ("<header>"
    +       "<ul>"
    +          "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Garvergården <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"
    +           "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Lunkegården <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"         
    +           "<li class=\"drop\">"
    +               "<a id=\"home\" href=\"#\"><img src=\"../img/logo.png\"></a>"
    +           "</li>"
    +           "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Parkgården <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"            
    +           "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Gimle <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"          
    +       "</ul>"
    +   "</header>");
}

if(document.querySelector("footer")){
    footer = document.querySelector("footer");

    footer.innerHTML = ("<div>"
    +       "<div>"
    +           "<h4>Kontaktinformasjon</h4>"
    +       "</div>"
    +       "<div>"
    +           "Telefon: <br>"
    +           "E-Post:" 
    +       "</div>"
    +   "</div>"
    +   "<div>"
    +       "<div>"
    +           "<h4>Besøksinformasjon</h4>"
    +       "</div>"
    +       "<div>"
    +           "Åpningstider: <br>"
    +           "Adresse:"
    +       "</div>"
    +   "</div>");
}
