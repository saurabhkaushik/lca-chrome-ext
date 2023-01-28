'use strict';

const texturl = 'https://api.botreload.com/report_new_api';
const threshold = 98;
const domain = 'liabilities';

async function submitForm() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  console.log("Form Value : " + title + content); 
  
  try {
    const res = await fetch(texturl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        domain,
        threshold,
      }),
    });

    const resJson = await res.json();
        if (res.status === 200) {
          console.log("Success");
          sessionStorage.setItem("response", JSON.stringify(resJson));
          window.location = "next-page.html";
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error", err);
      }  
}
document.getElementById('submittext').addEventListener('click', submitForm);

