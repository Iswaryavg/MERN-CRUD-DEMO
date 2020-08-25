import React from "react";
function Footer()
{const d=new Date();
 const result= d.getFullYear();
  return <div className="footer">
    <p>Copyright @{result}</p>
  </div>
}
export default Footer;