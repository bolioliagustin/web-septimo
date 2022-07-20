import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";

export default class footer extends Component {
  render() {
    return (
      <footer
        class="text-center text-lg-start footer"
        style={{ backgroundColor: "#FCDF68" }}
      >
        <div class="icons p-1">
          <div class="text-center">
            <a type="button" class="btn btn-lg" href="https://www.facebook.com/gruposcoutseptimomontevideo" >
              <Icon.Facebook size={25}/>
            </a>
            <div class="text-center icon_text">
              <p>Grupo Scout Séptimo de Montevideo</p>
              </div>
          </div>
          <div class="text-center">
            <a type="button" class="btn btn-lg" href="https://www.instagram.com/grupo_scout_septimo/">
              <Icon.Instagram size={25}/>
            </a>
            <div class="text-center icon_text">
              <p>grupo_scout_septimo</p>
              </div>
          </div>
          <div class="text-center">
            <a type="button" class="btn btn-lg" href="https://www.google.com.uy/maps/place/Grupo+Scout+Séptimo/@-34.8860202,-56.0941971,18z/data=!3m1!4b1!4m5!3m4!1s0x959f86c294570293:0xc26e484fb0b90a15!8m2!3d-34.8860225!4d-56.0930761?hl=es-419">
              <Icon.GeoAltFill size={25}/>
            </a>
            <div class="text-center icon_text">
             <p>Volteadores 1753</p>
              </div>
          </div>
          <div class="text-center">
            <a type="button" class="btn btn-lg">
              <Icon.EnvelopeFill size={25}/>
            </a>
            <div class="text-center icon_text">
              <p>gs7@scouts.org.uy</p>
            </div>
          </div>
        </div>
        <div class="text-center p-3">
          © 2022 Copyright: Grupo Scout Septimo
        </div>
      </footer>
    );
  }
}
