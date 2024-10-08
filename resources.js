// console.log("Hello World");
// const API_TOKEN = "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";

// let myResponse;
// let myQuery = "write a letter to a senator about climate change";

// async function query(data) {
//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/gpt2",
//         {
//             headers: { Authorization: `Bearer ${API_TOKEN}` },
//             method: "POST",
//             body: JSON.stringify(data),
//         }
//     );
//     const result = await response.json();
//     return result;
// }
// query(
//     myQuery
// ).then((response) => {
//     myResponse = JSON.stringify(response);
// });

// console.log(myResponse)






async function sendChat(){

let input = document.getElementById("user-input").value;

  console.log("Hello World");
  const API_TOKEN = "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";

  let myResponse;
  let myQuery = input;

  async function query(data) {
      const response = await fetch(
          "https://api-inference.huggingface.co/models/gpt2",
          {
              headers: { Authorization: `Bearer ${API_TOKEN}` },
              method: "POST",
              body: JSON.stringify(data),
          }
      );
      const result = await response.json();
      return result;
  }

  let response = await query(myQuery);



  let formattedResponse = response[0].generated_text;

  console.log(formattedResponse)

  
  document.getElementById("letter").innerHTML = formattedResponse
}
