import "./style.css"
import { Button } from "../Button/Button";


export const Footer=() =>
`
<div class="button-container">
${Button("/icons/facebook.png", "Facebook")}
${Button("/icons/github.png", "Github")}
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/linkedin.png", "LinkedIn")}
</div>

<p class="copy">Copyright ©2023 All rights reserved </p>


`

