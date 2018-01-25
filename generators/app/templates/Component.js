'use strict';

import JSXComponent from 'metal-jsx';
import style from './<%= componentName %>.scss';

class <%= componentName %> extends JSXComponent {
	render() {
		return (
			<div class={style.<%= componentName %>}>
				<%= componentName %> component Works!
			</div>
		);
	}
}

export default <%= componentName %>;
