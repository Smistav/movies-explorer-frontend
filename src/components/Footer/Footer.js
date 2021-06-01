import React from "react";
function Footer() {
  const year = new Date();
  return (
    <footer >
      <p>
        © {year.toLocaleString("ru-Ru", { year: "numeric" })}  Movie
      </p>
    </footer>
  );
}
export default Footer;