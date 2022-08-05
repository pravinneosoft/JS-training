let fetchuser = document.getElementById("fetchuser");
fetchuser.addEventListener("click", (e) => {
  userData();
});
async function userData() {
  const URL =await "https://jsonplaceholder.typicode.com/users";

  fetch(URL)
    .then((response) => response.json())

    .then((data) => {
      let html = "";
      data.forEach((element) => {
        let tbody = document.getElementById("tbody");
        html += ` <tr>
                    <th>${element.id}</th>
                    <th>${element.name}</th>
                    <th>${element.email}</th>
                    <th>${element.phone}</th>
                    <th>${element.website}</th>
                  </tr>`;
        tbody.innerHTML = html;
      });
    });
}
