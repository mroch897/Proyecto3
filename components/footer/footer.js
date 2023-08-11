import "./style.css"
import { Button } from "../Button/Button";


export const Footer=() =>
`
<div class="button-container">
${Button("/icons/facebook.png", "Facebook", "https://es-es.facebook.com/")}
${Button("/icons/github.png", "Github", "https://github.com/mroch897")}
${Button("/icons/twitter.png", "Twitter", "https://twitter.com/Marcr97Marrch")}
${Button("/icons/linkedin.png", "LinkedIn","https://www.linkedin.com/in/marcroigchueca/" )}
</div>

<p class="copy">Copyright ©2023 All rights reserved </p>


`

