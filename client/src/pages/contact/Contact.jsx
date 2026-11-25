import React from "react";

import Section1 from "../../sections/contactsection/contactfirst/Section1";
import Section2 from "../../sections/contactsection/contactsecond/Section2";
import Section3 from "../../sections/contactsection/contactthird/Section3";

const Contact = () => {
  return (
    <main className="contact-page">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};

export default Contact;