import React,{ Component }  from 'react';


function Header(){
    return(
        <div class="header">
		<div class="nav_bar">
			<div class="logo"><a href='#'>LOGO</a></div>
			<div class="right_panel">
				<ul class="list">
					<li id="li"><a href="#">Sign</a></li>
					<li id="li"><a href="#">Lang</a></li>
				</ul>
			</div>
		</div>
	</div>
    );
}
export default Header;