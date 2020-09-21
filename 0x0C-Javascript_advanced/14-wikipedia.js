const createElement = (data = "") => {
  const para = document.createElement("p");
  const node = document.createTextNode(data);
  para.appendChild(node);
  document.body.appendChild(para);
};

const queryWikipedia = (callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Typical action to be performed when the document is ready:
      const { extract } = xhttp.response.query.pages[
        Object.keys(xhttp.response.query.pages)[0]
      ];
      callback(extract);
    }
  };
  xhttp.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true
  );
  xhttp.responseType = "json";
  xhttp.send();
};

queryWikipedia(createElement);
