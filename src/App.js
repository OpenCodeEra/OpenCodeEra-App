import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Typed.js initialization
    var typed = new Typed("#element", {
      strings: ["Projects", "Community", "Innovation", "Contribution"],
      typeSpeed: 50,
    });

    // Elements to blur
    const elements = document.getElementsByClassName("blur");

    // Function to toggle blur and popup
    function toggle(x) {
      if (x) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("blurred");
        }
        document.getElementById("popup").classList.add("active");
        document.getElementById("contact").scrollIntoView();
      } else {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("blurred");
        }
        document.getElementById("popup").classList.remove("active");
      }
    }

    // Form submission handling
    var form = document.getElementById("messageForm");
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            toggle("body");
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
                toggle("body");
              } else {
                status.innerHTML =
                  "Oops! Too many requests. Please try again later.";
                toggle("body");
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
          toggle("body");
        });
    }
    form.addEventListener("submit", handleSubmit);
  }, []);

  // return (
  //   // Your React JSX goes here
  // );
}

export default App;