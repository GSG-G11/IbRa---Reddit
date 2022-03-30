const content = document.getElementById("content");
const media = document.getElementById("media");
const brn = document.getElementById("subtn")


const onePost = () => {
  const request = {
    method: "POST",
    body: JSON.stringify({
      content: content.value,
      media: media.value,
    }),
    headers: { "Content-Type": "application/json" },
  };
  
  return fetch("/addpost", request)
    // .then((result) => result.json())
    // .then((res) => {
    //   if (res.status === 400) {
    //     swal("Warning !", res.msg, "warning");
    //   } else if (res.status === 500) {
    //     swal("Warning !", res.msg, "warning");
    //   } else {
    //     window.location.href = "/posts";
    //   }
    // }
   
};

onePost();
