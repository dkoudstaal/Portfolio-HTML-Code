function init()
{
	var menuFP = document.getElementById('insertMenuFP');
	var menu= document.getElementById('insertMenu');

	
	if (menu) {
		menu.insertAdjacentHTML('afterBegin',
		    '<li><a href="../../Open-Portfolio.html">Cover Page</a></li>' +
            '<li><a href="./index.html">Resume</a></li>' +
                '<ul class="indent">' +
                    '<li><a href="./index.html#linkContactDetails">Contact</a></li>' +
                    '<li><a href="./index.html#linkPersonalDetails">Personal</a></li>' +
                    '<li><a href="./index.html#linkAcademic">Academic</a></li>' +
                    '<li><a href="./index.html#linkReferees">Referees</a></li>' +
                    '<li><a href="./index.html#linkMoreAboutMe">More About Me</a></li>' + 
                  '</ul>' +              
            '<li><a href="./it.html">IT Skills</a></li>' +
                '<ul class="indent">' +
                    '<li><a href="./python-code.html">Python Code</a></li>' +
                '</ul>');
	}
	else if (menuFP) {
		menuFP.insertAdjacentHTML('afterBegin',
		       '<li><a href="./Open-Portfolio.html">Cover Page</a><li>' +
            '<li><a href="./.data/pages/index.html">Resume</a></li>' +
                '<ul class="indent">' +
                    '<li><a href="./.data/pages/index.html#linkContactDetails">Contact</a></li>' +
                    '<li><a href="./.data/pages/index.html#linkPersonalDetails">Personal</a></li>' +
                    '<li><a href="./.data/pages/index.html#linkAcademic">Academic</a></li>' +
                    '<li><a href="./.data/pages/index.html#linkReferees">Referees</a></li>' +
                    '<li><a href="./.data/pages/index.html#linkMoreAboutMe">More About Me</a></li>' +
                 '</ul>' +               
            '<li><a href="./.data/pages/it.html">IT Skills</a></li>' +
                '<ul class="indent">' +
                    '<li><a href="./.data/pages/python-code.html">Python Code</a></li>' +
                 '</ul>');
	}
	
	var footer=document.getElementById('insertFooter');
	var footerFP=document.getElementById('insertFooterFP');
	
	if (footer) {
	   footer.insertAdjacentHTML('afterBegin', '<p>Designed by Leigh Student - last updated 11 June 2016</p>' +
	   '<figure><img src="../images/html5-badge-h-css3-semantics.png" width="60" alt="HTML5 Powered with CSS3 / Styling, and Semantics"' +
	   'title="HTML5 Powered with CSS3/ Styling, and Semantics"</figure>');
	}
	else if (footerFP) {
	   footerFP.insertAdjacentHTML('afterBegin', '<p>Designed by Leigh Student - last updated 11 June 2016</p>' +
	   '<figure><img src="./.data/images/html5-badge-h-css3-semantics.png" width="60" alt="HTML5 Powered with CSS3 / Styling, and Semantics"' + 
	   'title="HTML5 Powered with CSS3/ Styling, and Semantics"</figure>');
	}
	
/* 	var footerFP = document.getelementById('insertFooterFP');
	var footer = document.getelementById('insertFooter');
	
	if (footerFP) {
		footerFP.insertAdjacentHTML('afterend','<p>hello</p>');	
	}	
	else if (footer) {
		footer.insertAdjacentHTML('afterend','<p>hello</p>');
	}								
		 */							
									
									
									
									
/* 		"<li><a href='./index.html'>Details</a></li>" +
		"<li><a href='./.data/pages/index.html'>Details</a></li>" +
            "<ul class='indent'>"
                "<li><a href='./.data/pages/index.html#contactDetails'>Contact</a></li>" +
                "<li><a href='./.data/pages/index.html#personalDetails'>Personal</a></li>" +
                "<li><a href='./.data/pages/index.html#moreAboutMe'>More About Me</a></li>" +              
            "</ul>" +           
        "</li>");

  var insertMenuFirstPage =
      "<li><a href='./Open-Portfolio.html'>First Page</a></li>" +
      "<li><a href='./.data/pages/index.html'>Details</a></li>" 
      
  var insertFooter = "<p>Designed by Leigh Student - last updated 6 June 2016</p>" +
  							"<figure><img src='../images/html5-badge-h-css3-semantics.png' width='80' alt='HTML5 Powered with CSS3 / Styling, and Semantics'" +
  							"title='HTML5 Powered with CSS3 / Styling, and Semantics'></figure>"  
  
  document.getElementById("insertList").innerHTML = insertMenu;

  document.getElementById("insertFooter").innerHTML += insertFooter;
  document.getElementById("insertListFirstPage").innerHTML += insertMenuFirstPage; */
}
document.addEventListener( "DOMContentLoaded" , init , false );
