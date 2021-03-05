import { h, Component, render } from "preact";

import "../styles/popup.css";

class Hello extends Component {
	render() {
		return (
			<div className="popup-padded">
				<h1>{chrome.i18n.getMessage("l10nHello")}</h1>
			</div>
		);
	}
}

// --------------

render(<Hello />, document.getElementById("root"));
